import { SelectProps as ChakraSelectProps } from '@chakra-ui/react';

export type Option = {
  value: string;
  label: string;
};
export type SelectProps = ChakraSelectProps & {
  dataSource: Option[];
  placeholder?: string;
};
