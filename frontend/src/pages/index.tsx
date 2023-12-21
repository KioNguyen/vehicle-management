import React, { useCallback, useMemo } from 'react';
import {
  Button,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  Select,
  Input,
} from '@chakra-ui/react';
import VehicleList from '@/components/VehicleList';
import Pagination from '@/components/UI/Pagination';
import AddVehicleModal from '@/components/VehicleModal';
import FormikInput from '@/components/UI/FormikInput';
import { useMainPage } from './index.hook';
import styles from './index.module.css';

export async function getServerSideProps({ params, res, query, req }: any) {
  return {
    props: {},
  };
}
const LIMIT = 4;
const Home = () => {
  const [getters, actions] = useMainPage(LIMIT);
  const { currentPage, loading, error, error_, data, formik, isOpen }: any =
    getters;
  const { setCurrentPage, onOpen, onClose }: any = actions;

  const touched = useMemo(() => formik.touched, [formik.touched]);

  async function onPageClick(currentPage: number) {
    setCurrentPage(currentPage);
  }

  async function onSave() {
    formik.handleSubmit();
  }

  if (loading) return <p>Loading...</p>;

  return (
    <Container h='100vh' minW='100%' p={10}>
      <Container size='lg' minW='80%' className={styles.containerStyle}>
        <Flex>
          <Button colorScheme='blue' onClick={onOpen}>
            Add
          </Button>

          <AddVehicleModal
            isOpen={isOpen}
            onClose={() => {
              onClose();
              formik.resetForm();
            }}
            onSave={onSave}
          >
            {['name', 'description', 'price'].map((key) => (
              <FormikInput
                key={key}
                id={key}
                formik={formik}
                touched={touched[key]}
                isInvalid={touched[key] && formik.errors[key]}
              />
            ))}

            {/** dropdown */}
            {[
              {
                key: 'brand',
                placeHolder: 'Brand',
                options: [
                  'Mercedes_Benz',
                  'BMW',
                  'Volkswagen',
                  'Audi',
                  'Honda',
                  'Toyota',
                ],
              },
              {
                key: 'bodyType',
                placeHolder: 'Body Type',
                options: ['SUV', 'Sedan', 'Hatchback', 'Coupe', 'Convertible'],
              },
              {
                key: 'fuelType',
                placeHolder: 'Fuel Type',
                options: ['Petrol', 'Diesel', 'Hybrid', 'Electric'],
              },
            ].map((item) => {
              return (
                <FormControl
                  key={'select' + item.key}
                  isInvalid={touched[item.key] && formik.errors[item.key]}
                  p={2}
                >
                  <Select
                    onBlur={formik.handleBlur(item.key)}
                    onChange={(e) =>
                      formik.setFieldValue(item.key, e.target.value)
                    }
                  >
                    <option value=''>{item.placeHolder}</option>
                    {item.options.map((item, index) => (
                      <option key={index + 'item'} value={item}>
                        {item.replace(/_/g, ' ')}
                      </option>
                    ))}
                  </Select>
                  <FormErrorMessage>
                    {touched[item.key] && formik.errors[item.key]}
                  </FormErrorMessage>
                </FormControl>
              );
            })}
          </AddVehicleModal>
        </Flex>

        <VehicleList vehicles={data?.vehicles} />
        <Pagination
          currentPage={currentPage}
          pages={Math.ceil(data?.totalCounts / LIMIT)}
          pageClick={onPageClick}
        />
      </Container>
    </Container>
  );
};

export default Home;
