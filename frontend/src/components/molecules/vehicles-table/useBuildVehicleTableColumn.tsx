

import { VehicleTableData } from '@/types/vehicle/table';
import { ColumnDef } from '@tanstack/react-table';
import { useMemo } from 'react';

export function useBuildVehicleTableColumn() {
    return useMemo<ColumnDef<VehicleTableData | null>[]>(
        () => [
            {
                accessorKey: 'name',
                header: () => 'Name',
            },
            {
                accessorKey: 'description',
                header: () => 'Description',
            },
            {
                accessorKey: 'brand',
                header: () => 'Brand',
            },
            {
                accessorKey: 'bodyType',
                header: () => 'Body Type',
            },
            {
                accessorKey: 'fuelType',
                header: () => 'Fuel Type',
            },
            {
                accessorKey: 'price',
                header: () => 'Price',
            },
        ],
        [],
    );
}
