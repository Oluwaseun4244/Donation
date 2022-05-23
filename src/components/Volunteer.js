import React from "react";
import {
  Flex,
  Image,
  Text,
  Spacer,
  Box,
  Select,
  SimpleGrid,
  Button,
  Input,
  Divider,
  useDisclosure,
} from "@chakra-ui/react";
import faithPng from "../assets/images/faith.png";
import JoinOurTeamModal from "./JoinOurTeamModal";

const Volunteer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      w="100%"
      overflow="hidden"
      rounded={{ base: 8, md: "24px" }}
      direction={{ base: "column", md: "row" }}
    >
      <Flex w={{ base: "100%", md: "50%" }} bg="darkgreen" align="center">
        <Flex
          direction="column"
          gap={4}
          px={{ base: 4, md: 8 }}
          py={{ base: 4, md: 2 }}
        >
          <Text
            fontSize={{ base: "24px", md: "36px" }}
            fontWeight="600"
            color="white"
          >
            Become a Volunteer
          </Text>
          <Text
            fontSize={{ base: "14px", md: "20px" }}
            fontWeight="400"
            color="white"
          >
            You can also do more than give money. Please join our team.
          </Text>
          <Text
            fontSize={{ base: "14px", md: "20px" }}
            fontWeight="400"
            color="white"
          >
            There is so much to do, and we would be honoured to have you chip in
            your time or talent, as little or much as you can.
          </Text>
          <Box w="30%">
            <Button
              variant="action"
              fontSize={{ base: "14px", md: "18px" }}
              fontWeight="500"
              p={{ base: 4, md: 8 }}
              onClick={()=>{
                  onOpen()
              }}
            >
              JOIN OUR TEAM
            </Button>
          </Box>
        </Flex>
      </Flex>
      <Flex w={{ base: "100%", md: "50%" }}>
        <Image src={faithPng} alt="support" />
      </Flex>
      <JoinOurTeamModal onOpen={onOpen} isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};

export default Volunteer;
