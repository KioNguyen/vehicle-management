
import { useGetListVehicleQuery } from "@/api/graphql/generated/schema";
import { CoreTable } from "@/components/atoms/table";
import { VehicleTableData } from "@/types/vehicle/table";
import { PaginationState, getCoreRowModel, useReactTable } from "@tanstack/react-table";
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

    const { data } = useGetListVehicleQuery({
        variables: {
            page: pageIndex,
            limit: pageSize
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
            <CoreTable table={dataTableModel} pageIndex={pageIndex} pageSize={pageSize} totalPage={data?.getListVehicle.pagination.totalPage || 0} />
        </>
    )
}

export default VehicleTable;