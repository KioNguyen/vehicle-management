import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { useFormik } from 'formik';
import { useDisclosure, useToast } from '@chakra-ui/react';
import { object, string, number } from 'yup';
import { GET_VEHICLES } from '@/graphql/queries/vehicle';
import { ADD_VEHICLE } from '@/graphql/mutations/vehicle';

export const useMainPage = (LIMIT: number) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [formError, setFormError] = useState<string>('');
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { loading, error, data, refetch } = useQuery(GET_VEHICLES, {
    variables: {
      offset: currentPage === 1 ? 0 : (currentPage - 1) * LIMIT,
      limit: LIMIT,
    },
  });
  const [addVehicle, { data: response, loading: loading_, error: error_ }] =
    useMutation(ADD_VEHICLE, {
      errorPolicy: 'all', // remove popup error
    });

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      price: 0,
      brand: '',
      bodyType: '',
      fuelType: '',
    },
    validationSchema: object({
      name: string().required('Field is required'),
      description: string().nullable(),
      price: number()
        .typeError('Must be a number')
        .nullable()
        .default(0)
        .min(0, 'Value cannot be negative.'),
      brand: string().required('At Least 1 selection is required'),
      bodyType: string().required('At Least 1 selection is required'),
      fuelType: string().required('At Least 1 selection is required'),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      const values_ = { ...values, price: values && 0 };
      const { errors } = await addVehicle({ variables: values_ });
      if (errors)
        toast({
          title: 'Error',
          description: errors[0].message,
          status: 'error',
          duration: 7000,
          isClosable: true,
        });
      else
        toast({
          title: 'Success',
          description: 'Vehicle added successfully',
          status: 'success',
          duration: 7000,
          isClosable: true,
        });

      onClose();
      refetch();
      setSubmitting(false);
      formik.resetForm();
    },
  });

  const getters = {
    isOpen,
    currentPage,
    loading,
    error,
    error_,
    data: data?.getVehicles,
    formik,
  };

  const actions = { setCurrentPage, onOpen, onClose };
  return [getters, actions];
};
