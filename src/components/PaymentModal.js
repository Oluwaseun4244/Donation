import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
  Stack,
  Text,
  Image,
  useDisclosure
} from "@chakra-ui/react";
import { BsCheckCircleFill } from "react-icons/bs";
import TransferModal from "./TransferModal";

function PaymentModal({ isOpen, onOpen, onClose, pay }) {


  const { isOpen:isOpen1, onOpen: openModal, onClose: onCloseModal } = useDisclosure();
  const handlePay = (e, pay) => {
    console.log({ e, pay });
    pay(true);
  };

  const openTransfer =()=>{
    openModal()
    // onClose()
  }
  return (
    <Modal size="lg" isOpen={isOpen} onClose={onClose}>
      <TransferModal isOpen={isOpen1} onOpen={openModal} onClose={onCloseModal}/>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton color="#1E363F" bg="#E5E5E5" rounded="50%" />

        <ModalBody mt="50px" px={{ base: "15px", md: "30px" }}>
          <Button
            mt={4}
            variant="action"
            color="white"
            py={{ base: 6, md: 8 }}
            fontSize="18px"
            fontWeight="500"
            w="100%"
            onClick={(e) => handlePay(e, pay)}
          >
           Pay with card (local)
          </Button>
          <Button
            mt={4}
            variant="action"
            color="white"
            py={{ base: 6, md: 8 }}
            fontSize="18px"
            fontWeight="500"
            w="100%"
            onClick={(e) => handlePay(e, pay)}
          >
            Pay with Card (international)
          </Button>
          <Button
            mt={4}
            mb={6}
            variant="action"
            color="white"
            py={{ base: 6, md: 8 }}
            fontSize="18px"
            fontWeight="500"
            w="100%"
            onClick={openTransfer}
          >
            Pay with Bank Transfer
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default PaymentModal;
