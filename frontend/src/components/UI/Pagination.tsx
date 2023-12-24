import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
//mock pagination
const Pagination = ({ currentPage, pages, pageClick }: any) => (
  <Flex mt={10} mb={10}>
    {pages &&
      [...Array(pages).keys()].map((index) => (
        <Box
          px={8}
          py={2}
          border='1px'
          {...(index + 1 === currentPage && { bg: 'gray' })}
          borderColor='purple'
          key={index + 'page'}
          ml={2}
          mr={2}
          borderRadius={10}
          onClick={() => pageClick(index + 1)}
        >
          {index + 1}
        </Box>
      ))}
  </Flex>
);

export default Pagination;
