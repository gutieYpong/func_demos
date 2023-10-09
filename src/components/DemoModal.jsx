import React, { useRef } from 'react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  useDisclosure,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';


export default function DemoModal({ children, modalTitle }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnRef = useRef(null);
  const initialRef = useRef(null)

  const childrenWithRef = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { initialRef: initialRef });
    }
    return child;
  });

  return (
    <>
      <Button variant={'link'} colorScheme={'blue'} size={'sm'} ref={btnRef} onClick={onOpen}>
        Click for demo
      </Button>

      <Modal
        initialFocusRef={initialRef}
        onClose={onClose}
        finalFocusRef={btnRef}
        isOpen={isOpen}
        scrollBehavior={'inside'}
        size={'3xl'}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{ modalTitle }</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            { childrenWithRef }
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
