import { Flex, Text, Box, Button } from "@chakra-ui/react";

const Hero = ({ click }) => {
  return (
    <Flex
      direction="column"
      w={{ base: "100%", md: "60%" }}
      px={{ base: "20px", md: "150px" }}
      py={{ base: "12px", md: "38px" }}
      gap={{ base: 3, md: 8 }}
    >
      <Text
        fontSize={{ base: "30px", md: "60px" }}
        fontWeight="700"
        color="white"
        lineHeight="1.3"
      >
        The Good Man Working For Ordinary People.
      </Text>
      <Text
        fontSize={{ base: "14px", md: "20px" }}
        fontWeight="400"
        color="white"
        lineHeight="1.5"
        textAlign="left"
        // textAlign="justify"
      >
        Our campaign is YOUR movement: for intellect, for competence, for speed,
        for honesty.{" "}
      </Text>
      <Text
        fontSize={{ base: "14px", md: "20px" }}
        fontWeight="400"
        color="white"
        lineHeight="1.5"
      >
        From a man who has seen it all.<strong> IT IS TIME.</strong>
      </Text>
      <Box>
        <Button
          variant="action"
          p={{ base: 4, md: 8 }}
          onClick={() => click("donateSection")}
        >
          DONATE
        </Button>
      </Box>
    </Flex>
  );
};

export default Hero;
