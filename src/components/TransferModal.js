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
} from "@chakra-ui/react";
import { BsCheckCircleFill } from "react-icons/bs";

function TransferModal({ isOpen, onOpen, onClose }) {
  return (
    <Modal size="lg" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton color="#1E363F" bg="#E5E5E5" rounded="50%" />

        <ModalBody mt="50px" px={{ base: "15px", md: "30px" }}>
          <Box>
            <Box>
              <Text>Please make transfer to:</Text>
            </Box>
            <Box mb="15px">
              <Text>
                Account Name: <strong>The People for Osinbajo</strong>
              </Text>
            </Box>
            <Text>
              <strong>Bank Name: GTBank</strong>
            </Text>
            <Text>
              <strong> Account Number(s):</strong>
            </Text>
            <Text>Naira: 0019523685 </Text>
            <Text>USD: 0904221294</Text>
            <Text> GBP: 0822751352</Text>
            <Text mb="15px"> EUR: 1412752351</Text>
            <Text mb="15px">
              Swift Code: <strong>GTBINGLA</strong>
            </Text>
            <Text>
              You may include the following text in your transaction if you
              would like us to know it is you:
            </Text>
            <Text mb="20px">
              <strong> AB1476</strong>
            </Text>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default TransferModal;
