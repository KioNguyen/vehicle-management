
import { useGetListVehicleQuery } from "@/api/graphql/generated/schema";
import { CoreTable } from "@/components/atoms/table";
import { VehicleTableData } from "@/types/vehicle/table";
import { PaginationState, createColumnHelper, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { useMemo, useState } from "react";
import { convertToVehiclesTableData } from "./convertToVehiclesTableData";
import { useBuildVehicleTableColumn } from "./useBuildVehicleTableColumn";

const VehicleTable = () => {

    const columns = useBuildVehicleTableColumn();
    const [{ pageIndex, pageSize }, setPagination] =
        useState<PaginationState>({
            pageIndex: 1,
            pageSize: 10,
        });

    const { data, loading } = useGetListVehicleQuery()

    type UnitConversion = {
        fromUnit: string;
        toUnit: string;
        factor: number;
    };


    const columnHelper = createColumnHelper<UnitConversion>();



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
        <CoreTable table={dataTableModel} />
    )
}

export default VehicleTable;