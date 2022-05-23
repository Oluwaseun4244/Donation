import React, { useState } from "react";
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
  useDisclosure,
  HStack,
  Spacer,
  useToast,
} from "@chakra-ui/react";

export default function BankDetailsModal({ isOpen, onOpen, onClose }) {
  const [donationMade, setDonationMade] = useState(false);
  const [donateLater, setDonateLater] = useState(false);
  const {
    isOpen: donationCompleteIsOpen,
    onOpen: openDonationComplete,
    onClose: closeDonationComplete,
  } = useDisclosure();

  const handleAction = (action) => {
    if (action === "complete") {
      setDonateLater(false);
      setDonationMade(true);
    } else {
      setDonationMade(false);
      setDonateLater(true);
    }
  };

  const handleClose = () => {
    setDonationMade(false);
    setDonateLater(false);
    onClose()
  };
  return (
    <Modal size="lg" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      {donationMade ? (
        <ModalContent>
          <ModalCloseButton
            onClick={handleClose}
            color="#1E363F"
            bg="#E5E5E5"
            rounded="50%"
          />

          <ModalBody mt="50px" mb="40px" px={{ base: "15px", md: "30px" }}>
            <Text textAlign="center" fontSize="18px" fontWeight="400">
              Thank you for donating to the PYO Campaign. We will confirm your
              donation.
            </Text>

            <Button
              mt={4}
              variant="action"
              color="white"
              py={{ base: 6, md: 6 }}
              fontSize="18px"
              fontWeight="500"
              // bg="orange"
              w={{ base: "100%", md: "100%" }}
              onClick={handleClose}
            >
              Okay
            </Button>
          </ModalBody>
        </ModalContent>
      ) : donateLater ? (
        <ModalContent>
          <ModalCloseButton
            onClick={handleClose}
            color="#1E363F"
            bg="#E5E5E5"
            rounded="50%"
          />

          <ModalBody mt="50px" mb="40px" px={{ base: "15px", md: "30px" }}>
            <Text textAlign="center" fontSize="18px" fontWeight="400">
              Thank you for your interest to donate to the PYO Campaign. We will
              keep in touch.
            </Text>
            <Button
              mt={4}
              variant="action"
              color="white"
              py={{ base: 6, md: 6 }}
              fontSize="18px"
              fontWeight="500"
              // bg="orange"
              w={{ base: "100%", md: "100%" }}
              onClick={handleClose}
            >
              Okay
            </Button>
          </ModalBody>
        </ModalContent>
      ) : (
        <ModalContent>
          {/* <ModalCloseButton color="#1E363F" bg="#E5E5E5" rounded="50%" /> */}

          <Stack direction={["column", "row"]} py="20px" px="10px">
            <Button
              // mt={4}
              variant="action"
              color="white"
              py={{ base: 6, md: 6 }}
              fontSize="18px"
              fontWeight="500"
              w={{ base: "100%", md: "50%" }}
              onClick={() => handleAction("complete")}
            >
              Donation Transfer Complete
            </Button>
            <Spacer />
            <Button
              // mt={4}
              variant="action"
              color="white"
              py={{ base: 6, md: 6 }}
              fontSize="18px"
              fontWeight="500"
              bg="orange"
              w={{ base: "100%", md: "40%" }}
              onClick={() => handleAction("later")}
            >
              I will Donate Later
            </Button>
          </Stack>

          <ModalBody mt="10px" px={{ base: "15px", md: "30px" }}>
            <Text fontSize="18px" fontWeight="400">
              The Official PYO Fundrainsing Campaign is managed by PYO Global
              Movement for Good Governance.
            </Text>
            <Text fontSize="18px" mt="20px" fontWeight="400">
              Please make your donations to: PYO Global Movement For Good
              Governance
            </Text>
            <Text textAlign="center" fontSize="18px" mt="20px" fontWeight="500">
              NAIRA Account:
            </Text>
            <Text
              textAlign="center"
              // mb="30px"
              fontSize="18px"
              mt="10px"
              fontWeight="500"
            >
              EcoBank: 5910004662
            </Text>
            <Text
              textAlign="center"
              mb="30px"
              fontSize="18px"
              mt="10px"
              fontWeight="500"
            >
              UBA: 1025182078
            </Text>
            <Text textAlign="center" fontSize="18px" mt="20px" fontWeight="500">
              USD Account:
            </Text>
            <Text
              textAlign="center"
              // mb="30px"
              fontSize="18px"
              mt="20px"
              fontWeight="500"
            >
              EcoBank: 5910004679
            </Text>
            <Text
              textAlign="center"
              mb="30px"
              fontSize="18px"
              mt="10px"
              fontWeight="500"
            >
              UBA: 3003696830
            </Text>
          </ModalBody>
        </ModalContent>
      )}
    </Modal>
  );
}
