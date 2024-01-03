
import { BodyType, Brand, FuelType, useGetListVehicleQuery } from "@/api/graphql/generated/schema";
import Select from "@/components/atoms/select";
import { CoreTable } from "@/components/atoms/table";
import { VehicleTableData } from "@/types/vehicle/table";
import { FormControl, FormLabel, Grid, GridItem, Input } from "@chakra-ui/react";
import { PaginationState, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { useDebounce } from "@uidotdev/usehooks";
import { useMemo, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { convertToVehiclesTableData } from "./convertToVehiclesTableData";
import { useBuildVehicleTableColumn } from "./useBuildVehicleTableColumn";
type FilterInputs = {
    name: string
    brand: Brand
    bodyType: BodyType
    fuelType: FuelType
    price: number
}
const VehicleTable = () => {
    const columns = useBuildVehicleTableColumn();
    const brandDataSource = [...new Set(Object.values(Brand))].map((brand) => ({ label: brand, value: brand }))
    const bodyTypeDataSource = [...new Set(Object.values(BodyType))].map((type) => ({ label: type, value: type }))
    const fuelTypeDataSource = [...new Set(Object.values(FuelType))].map((type) => ({ label: type, value: type }))
    const [{ pageIndex, pageSize }, setPagination] =
        useState<PaginationState>({
            pageIndex: 1,
            pageSize: 10,
        });

    const {
        control,
        watch
    } = useForm<FilterInputs>()

    const debouncedSearchName = useDebounce(watch('name'), 500);

    const { data } = useGetListVehicleQuery({
        variables: {
            page: pageIndex,
            limit: pageSize,
            filter: {
                fuelType: watch("fuelType") || null,
                brand: watch("brand") || null,
                bodyType: watch("bodyType") || null,
                name: debouncedSearchName || null,
            }
        }
    })

    const dataTable = useMemo<Array<VehicleTableData | null>>(
        () =>
            convertToVehiclesTableData(
                data?.getListVehicle?.items || [],
            ),
        [data],
    );

    const dataTableModel = useReactTable({
        data: dataTable,
        columns,
        getCoreRowModel: getCoreRowModel(),
        onPaginationChange: setPagination,
        state: {
            pagination: {
                pageIndex: pageIndex,
                pageSize: pageSize,
            },
        },
        pageCount: pageIndex,
        manualPagination: true,
    });

    return (
        <>
            <form>
                <Grid column={{ sm: 2, md: 3 }} templateColumns='repeat(6, 1fr)' gap={3} my={6}>
                    <GridItem w='100%'>
                        <Controller
                            control={control}
                            name="brand"
                            render={({ field: { onChange, value } }) => (
                                <FormControl >
                                    <FormLabel>Fuel Type</FormLabel>
                                    <Select dataSource={brandDataSource} onChange={onChange} value={value} placeholder="Select Brand" />
                                </FormControl>
                            )}
                        />
                    </GridItem>
                    <GridItem w='100%'>
                        <Controller
                            control={control}
                            name="fuelType"
                            render={({ field: { onChange, value } }) => (
                                <FormControl >
                                    <FormLabel>Fuel Type</FormLabel>
                                    <Select dataSource={fuelTypeDataSource} onChange={onChange} value={value} placeholder="Select Fuel Type" />
                                </FormControl>
                            )}
                        />
                    </GridItem>
                    <GridItem w='100%'>
                        <Controller
                            control={control}
                            name="bodyType"
                            render={({ field: { onChange, value } }) => (
                                <FormControl >
                                    <FormLabel>Body Type</FormLabel>
                                    <Select dataSource={bodyTypeDataSource} onChange={onChange} value={value} placeholder="Select Body Type" />
                                </FormControl>
                            )}
                        />
                    </GridItem>
                    <GridItem w='100%'>
                        <Controller
                            control={control}
                            name="name"
                            render={({ field: { ...props } }) => (
                                <FormControl>
                                    <FormLabel>Name</FormLabel>
                                    <Input placeholder='Input name' {...props} />
                                </FormControl>
                            )}
                        />
                    </GridItem>
                </Grid>
            </form>
            <CoreTable table={dataTableModel} pageIndex={pageIndex} pageSize={pageSize} totalPage={data?.getListVehicle.pagination.totalPage || 0} />
        </>
    )
}

export default VehicleTable;