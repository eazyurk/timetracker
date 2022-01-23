import React from 'react';

import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Textarea,
} from '@chakra-ui/react';

import DateTimePicker from './DateTimePicker';

const LogTimeModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dateNow = new Date();

  return (
    <>
      <Button onClick={onOpen} variant={'outline'}>
        Log time
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Log time</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Start time</FormLabel>
              <DateTimePicker initialValue={dateNow}></DateTimePicker>
            </FormControl>
            <FormControl>
              <FormLabel>End time</FormLabel>
              <DateTimePicker></DateTimePicker>
            </FormControl>
            <FormControl>
              <FormLabel>Description</FormLabel>
              <Textarea />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="green" mr={3}>
              Create log
            </Button>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LogTimeModal;
