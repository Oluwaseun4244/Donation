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
} from "@chakra-ui/react";

const NewsLetter = () => {
  return (
    <Flex direction="column" align="center" textAlign="center" gap={3} w="100%">
      <Text
        fontSize={{ base: "24px", md: "36px" }}
        fontWeight="600"
        color="darkgreen"
      >
        Sign up for our newsletter
      </Text>
      <Text
        fontSize={{ base: "14px", md: "20px" }}
        fontWeight="400"
        color="darkgreen"
      >
        Be the first to get updates about Your Movement: Osinbajo 2023
      </Text>
      <Flex w={{ base: "100%", md: "50%" }} gap={3} py={4}>
        <Input
          placeholder="Enter your email"
          color="darkgreen"
          fontSize="16px"
          fontWeight="400"
          bg="white"
          p={6}
        />
        <Button
          variant="action"
          fontSize={{ base: "14px", md: "18px" }}
          fontWeight="500"
          py={6}
          px={{ base: 6, md: 12 }}
        >
          SUBSCRIBE
        </Button>
      </Flex>
    </Flex>
  );
};

export default NewsLetter;
