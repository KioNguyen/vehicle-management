import { registerEnumType } from 'type-graphql';

export enum Brand {
  MERCEDES_BENZ = 'Mercedes_Benz',
  BMW = 'BMW',
  VOLKSWAGEN = 'Volkswagen',
  AUDI = 'Audi',
  HONDA = 'Honda',
  TOYOTA = 'Toyota'
}

export enum BodyType {
  SUV = 'SUV',
  SEDAN = 'Sedan',
  HATCHBACK = 'Hatchback',
  COUPE = 'Coupe',
  CONVERTIBLE = 'Convertible'
}

export enum FuelType {
  PETROL = 'Petrol',
  DIESEL = 'Diesel',
  HYBRID = 'Hybrid',
  ELECTRIC = 'Electric'
}

registerEnumType(Brand, {
  name: 'Brand'
});

registerEnumType(BodyType, {
  name: 'BodyType'
});
registerEnumType(FuelType, {
  name: 'FuelType'
});
