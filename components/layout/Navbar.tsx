import React from 'react';
import { Flex, Container, Stack, Link, Text, Button } from '@chakra-ui/react';

import LogTimeModal from '../LogTimeModal';

const Navbar = () => {
  return (
    <Flex
      position={{ md: 'fixed' }}
      minH="4rem"
      w="100%"
      marginTop={{ md: '-4rem' }}
      zIndex="99"
      borderBottom="1px solid black"
    >
      <Container maxW="container.lg" paddingTop="10px">
        <Stack direction={['column', 'row']} alignItems={['flex-end', 'center']}>
          <Text fontSize="xl" fontWeight="500">
            Eacyt Time Tracker
          </Text>
          <Stack direction={['column', 'row']} style={{ marginLeft: '5rem' }}>
            <Link href={'/'}>
              <Button colorScheme="navItem" variant="ghost">
                Home
              </Button>
            </Link>
            <Link href={'/logs'}>
              <Button colorScheme="navItem" variant="ghost">
                Logs
              </Button>
            </Link>
          </Stack>
          <Stack direction={['column', 'row']} style={{ marginLeft: 'auto' }}>
            <LogTimeModal></LogTimeModal>
          </Stack>
        </Stack>
      </Container>
    </Flex>
  );
};

export default Navbar;
