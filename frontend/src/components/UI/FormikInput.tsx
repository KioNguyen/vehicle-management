import React from 'react';
import { FormControl, FormErrorMessage, Input } from '@chakra-ui/react';

interface IFormikInputProps {
  id: string;
  formik: any;
  isInvalid: boolean;
  touched: boolean;
}

const FormikInput = ({
  id: key,
  formik,
  isInvalid,
  touched,
}: IFormikInputProps) => (
  <FormControl isInvalid={isInvalid} p={2}>
    <Input
      key={key + 'addVehicle'}
      placeholder={key}
      id={key}
      onBlur={formik.handleBlur}
      onChange={formik.handleChange}
      value={formik.values[key]}
      {...(key === 'price' && { type: 'number' })}
    />
    <FormErrorMessage>{touched && formik.errors[key]}</FormErrorMessage>
  </FormControl>
);

export default FormikInput;
