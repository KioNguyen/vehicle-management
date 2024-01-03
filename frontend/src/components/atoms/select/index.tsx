import { Select as ChakraSelect } from '@chakra-ui/react';
import { SelectProps } from './type';


const Select = ({ dataSource, placeholder, ...props }: SelectProps) => {
    return (
        <ChakraSelect placeholder={placeholder} {...props}>
            {dataSource.map(option => {
                return <option value={option.value}>{option.label}</option>

            })}
        </ChakraSelect>
    )
}

export default Select;