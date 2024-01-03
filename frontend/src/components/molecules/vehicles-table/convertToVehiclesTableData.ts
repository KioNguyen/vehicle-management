import { Vehicle } from '@/api/graphql/generated/schema';
import { VehicleTableData } from '@/types/vehicle/table';

export function convertToVehiclesTableData(
  items: Array<Vehicle | null>,
): Array<VehicleTableData | null> {
  return items.map<VehicleTableData | null>(
    (item: Vehicle | null): VehicleTableData | null => {
      if (!item) return null;
      return {
        bodyType: item.bodyType,
        brand: item.brand,
        createdAt: item.createdAt,
        deletedAt: item.deletedAt,
        description: item.description,
        fuelType: item.fuelType,
        id: item.id,
        name: item.name,
        price: item.price,
        updatedAt: item.updatedAt,
      };
    },
  );
}
