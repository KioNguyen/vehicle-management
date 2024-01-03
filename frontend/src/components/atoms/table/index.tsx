import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import { Table, Tbody, Td, Th, Thead, Tr, chakra } from "@chakra-ui/react";
import {
    SortingState,
    Table as TableType,
    flexRender
} from "@tanstack/react-table";
import * as React from "react";
import { PaginatedItems } from "../pagination";

export type CoreTableProps<Data extends object> = {
    table: TableType<any>;
    totalPage: number
    pageIndex: number
    pageSize: number
};

export function CoreTable<Data extends object>({
    table,
    pageIndex,
    pageSize,
    totalPage
}: CoreTableProps<Data>) {
    const [sorting, setSorting] = React.useState<SortingState>([]);
    const handlePageChange = (event: { selected: number }) => {
        console.log("🚀 ~ file: index.tsx:26 ~ handlePageChange ~ event:", event)
        table.setPagination({ pageIndex: event.selected + 1, pageSize: pageSize })
    }
    return (
        <>
            <Table>
                <Thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <Tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                // see https://tanstack.com/table/v8/docs/api/core/column-def#meta to type this correctly
                                const meta: any = header.column.columnDef.meta;
                                return (
                                    <Th
                                        key={header.id}
                                        onClick={header.column.getToggleSortingHandler()}
                                        isNumeric={meta?.isNumeric}
                                    >
                                        {flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}

                                        <chakra.span pl="4">
                                            {header.column.getIsSorted() ? (
                                                header.column.getIsSorted() === "desc" ? (
                                                    <TriangleDownIcon aria-label="sorted descending" />
                                                ) : (
                                                    <TriangleUpIcon aria-label="sorted ascending" />
                                                )
                                            ) : null}
                                        </chakra.span>
                                    </Th>
                                );
                            })}
                        </Tr>
                    ))}
                </Thead>
                <Tbody>
                    {table.getRowModel().rows.map((row) => (
                        <Tr key={row.id}>
                            {row.getVisibleCells().map((cell) => {
                                // see https://tanstack.com/table/v8/docs/api/core/column-def#meta to type this correctly
                                const meta: any = cell.column.columnDef.meta;
                                return (
                                    <Td key={cell.id} isNumeric={meta?.isNumeric}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </Td>
                                );
                            })}
                        </Tr>
                    ))}
                </Tbody>
            </Table>
            <PaginatedItems itemsPerPage={pageSize} page={pageIndex} totalPage={totalPage} onPageClick={handlePageChange} />
        </>

    );
}
