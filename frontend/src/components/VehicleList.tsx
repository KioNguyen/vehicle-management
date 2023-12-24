import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
const VehicleList = ({ vehicles }: any) => {
  return (
    <>
      <Grid templateColumns='repeat(3, 1fr)' gap={10}>
        {vehicles &&
          vehicles.map((vehicle: any, index: any) => (
            <GridItem
              key={index + 'vehicleItem'}
              boxShadow='lg'
              p={5}
              fontSize={12}
              style={{ border: '1px solid gray' }}
            >
              {Object.keys(vehicle).map((key, index) => (
                <div
                  key={index + key}
                  style={{
                    fontWeight: key === 'name' ? 'bold' : 'normal',
                    borderBottom: '1px solid gray',
                  }}
                >
                  {key === 'price'
                    ? new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD',
                      }).format(vehicle[key])
                    : vehicle[key]}
                </div>
              ))}
            </GridItem>
          ))}
      </Grid>
    </>
  );
};

export default VehicleList;
