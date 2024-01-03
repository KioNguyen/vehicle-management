import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTimeISO: { input: any; output: any; }
};

export enum BodyType {
  Convertible = 'CONVERTIBLE',
  Coupe = 'COUPE',
  Hatchback = 'HATCHBACK',
  Sedan = 'SEDAN',
  Suv = 'SUV'
}

export enum Brand {
  Audi = 'AUDI',
  Bmw = 'BMW',
  Honda = 'HONDA',
  MercedesBenz = 'MERCEDES_BENZ',
  Toyota = 'TOYOTA',
  Volkswagen = 'VOLKSWAGEN'
}

export enum FuelType {
  Diesel = 'DIESEL',
  Electric = 'ELECTRIC',
  Hybrid = 'HYBRID',
  Petrol = 'PETROL'
}

export type GetVehiclesResponse = {
  __typename?: 'GetVehiclesResponse';
  items: Array<Vehicle>;
  pagination: Pagination;
};

export type Pagination = {
  __typename?: 'Pagination';
  limit: Scalars['Float']['output'];
  page: Scalars['Float']['output'];
  total: Scalars['Float']['output'];
  totalPage: Scalars['Float']['output'];
};

export type PaginationArgument = {
  limit?: Scalars['Int']['input'];
  page?: Scalars['Int']['input'];
};

export type Query = {
  __typename?: 'Query';
  getListVehicle: GetVehiclesResponse;
};


export type QueryGetListVehicleArgs = {
  pagination?: InputMaybe<PaginationArgument>;
};

export type Vehicle = {
  __typename?: 'Vehicle';
  bodyType: BodyType;
  brand: Brand;
  createdAt: Scalars['DateTimeISO']['output'];
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  description: Scalars['String']['output'];
  fuelType: FuelType;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type GetListVehicleQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetListVehicleQuery = { __typename?: 'Query', getListVehicle: { __typename?: 'GetVehiclesResponse', items: Array<{ __typename?: 'Vehicle', id: string, name: string, brand: Brand, description: string, bodyType: BodyType, fuelType: FuelType, price: number, createdAt: any, updatedAt: any, deletedAt?: any | null }>, pagination: { __typename?: 'Pagination', total: number, page: number, limit: number, totalPage: number } } };


export const GetListVehicleDocument = gql`
    query GetListVehicle($page: Int = 1, $limit: Int = 10) {
  getListVehicle(pagination: {page: $page, limit: $limit}) {
    items {
      id
      name
      brand
      description
      bodyType
      fuelType
      price
      createdAt
      updatedAt
      deletedAt
    }
    pagination {
      total
      page
      limit
      totalPage
    }
  }
}
    `;

/**
 * __useGetListVehicleQuery__
 *
 * To run a query within a React component, call `useGetListVehicleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetListVehicleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetListVehicleQuery({
 *   variables: {
 *      page: // value for 'page'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useGetListVehicleQuery(baseOptions?: Apollo.QueryHookOptions<GetListVehicleQuery, GetListVehicleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetListVehicleQuery, GetListVehicleQueryVariables>(GetListVehicleDocument, options);
      }
export function useGetListVehicleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetListVehicleQuery, GetListVehicleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetListVehicleQuery, GetListVehicleQueryVariables>(GetListVehicleDocument, options);
        }
export type GetListVehicleQueryHookResult = ReturnType<typeof useGetListVehicleQuery>;
export type GetListVehicleLazyQueryHookResult = ReturnType<typeof useGetListVehicleLazyQuery>;
export type GetListVehicleQueryResult = Apollo.QueryResult<GetListVehicleQuery, GetListVehicleQueryVariables>;