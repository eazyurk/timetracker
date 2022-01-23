import React from 'react';

import { Table, Thead, Tbody, Tr, Th, Td, Box, Heading } from '@chakra-ui/react';

const LogTable = () => {
  return (
    <Box>
      <Heading as={'h1'} size={'md'}>
        Week #50
      </Heading>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>#</Th>
            <Th>Start</Th>
            <Th>End</Th>
            <Th>Time</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>1</Td>
            <Td>01-01-2022 00:00</Td>
            <Td>01-01-2022 07:00</Td>
            <Td>7 hours</Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
};

export default LogTable;
