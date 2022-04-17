import React from "react";
import {
  Flex,
  Image,
  Text,
  Spacer,
  SimpleGrid,
  Input,
  Divider,
} from "@chakra-ui/react";
import logoPng from "../assets/images/logo2.png";

const Footer = () => {
  return (
    <>
      <Flex
        bg="darkgreen"
        w="100%"
        px={{ base: "20px", md: "150px" }}
        pt={{ base: 4, md: 12 }}
        align={{ base: "left", md: "center" }}
        direction="column"
        gap={2}
        pb={{ base: "60px", md: "80px" }}
      >
        
        <Image w={{ base: "70%", md: "initial" }} src={logoPng} alt="logo" />
        {/* <Flex w='100%' alignItems={{base:'left', md:'center'}} >
                    </Flex> */}
        <Text fontSize="18px" fontWeight="400" color="disable" textAlign="left">
          The Everyday Man Working For Everyday People.
        </Text>
      </Flex>
      <Divider borderColor="disable" />
      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        spacing={4}
        p={{ base: "20px", md: "150px" }}
        bg="darkgreen"
      >
        <Flex direction="column">
          <Text
            fontSize={{ base: "14px", md: "16px" }}
            fontWeight="500"
            color="disable"
          >
            email us on:
          </Text>
          <Text
            fontSize={{ base: "18px", md: "24px" }}
            fontWeight="400"
            color="white"
          >
            campaign@yemiosinbajo.ng
          </Text>
        </Flex>
        <Flex direction="column">
          <Text
            fontSize={{ base: "14px", md: "16px" }}
            fontWeight="500"
            color="disable"
          >
            Call us on:
          </Text>
          <Text
            fontSize={{ base: "18px", md: "24px" }}
            fontWeight="400"
            color="white"
          >
            +234-815-9406-195
          </Text>
      
        </Flex>
        <Flex direction="column">
          <Text
            fontSize={{ base: "14px", md: "16px" }}
            fontWeight="500"
            color="disable"
          >
            Find us:
          </Text>
          <Text
            fontSize={{ base: "18px", md: "24px" }}
            fontWeight="400"
            color="white"
          >
            29 Ndjamena Crescent Wuse 2, Abuja, FCT.
          </Text>
        </Flex>
      </SimpleGrid>
      <Divider borderColor="disable" />
      <Flex
        direction={{ base: "column-reverse", md: "row" }}
        gap={4}
        px={{ base: "20px", md: "150px" }}
        py={{ base: 6, md: 12 }}
        bg="darkgreen"
      >
        <Flex TextAlign="center" w={{ base: "100%", md: "50%" }}>
          <Text
            px={{base: "15%", md : "initial"}}
            fontSize={{ base: "14px", md: "18px" }}
            fontWeight="400"
            color="disable"
          >
            ©Osinbajo 2023. All rights reserved.
          </Text>
        </Flex>
        <Spacer />
        <Flex
          gap={12}
          w={{ base: "100%", md: "50%" }}
          justifyContent={{ base: "center", md: "flex-end" }}
        >
          <Text
            fontSize={{ base: "14px", md: "16px" }}
            fontWeight="500"
            color="white"
          >
            Privacy Policy
          </Text>
          <Text
            fontSize={{ base: "14px", md: "16px" }}
            fontWeight="500"
            color="white"
          >
            Terms of Condition
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default Footer;
