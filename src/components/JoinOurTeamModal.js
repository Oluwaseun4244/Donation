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
  Input,
  Select,
} from "@chakra-ui/react";
import countries from "../components/data/countries.json";

export default function JoinOurTeamModal({ isOpen, onOpen, onClose, pay }) {
  const [success, setSuccess] = React.useState(false);

  const [firstNameErr, setFirstNameErr] = useState("");
  const [lastNameErr, setlastNameErr] = useState("");
  const [emailErr, setemailErr] = useState("");
  const [phoneNumberErr, setphoneNumberErr] = useState("");
  const [countryErr, setcountryErr] = useState("");
  const [stateErr, setstateErr] = useState("");

  const [details, setDetails] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    country: "",
    state: "",
  });

  const handleDetails = (e) => {
    let value = e.target.value;

    setDetails({ ...details, [e.target.id]: value });
  };

  const submitDetails = () => {
    setFirstNameErr("");
    setlastNameErr("");
    setemailErr("");
    setcountryErr("");
    setstateErr("");
    setphoneNumberErr("");
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(details),
      redirect: "follow",
    };

    fetch("https://com.itskillscenter.com/api/join_us", requestOptions)
      .then((response) => response.json())
      .then((response) => {
        console.log("response", response.email);

        if (response.success) {
          setSuccess(true);
        }

        if (response.email) {
          setemailErr(response.email);
        }

        if (response.country) {
          setcountryErr(response.country);
        }

        if (response.firstName) {
          setFirstNameErr(response.firstName);
        }
        if (response.lastName) {
          setlastNameErr(response.lastName);
        }
        if (response.state) {
          setstateErr(response.state);
        }
        if (response.phoneNumber) {
          setphoneNumberErr(response.phoneNumber);
        }
      })
      .catch((error) => {
        alert(
          "Something went wrong! Please check your internet connection...."
        );
        console.log("error", error);
      });
  };

  const handleClose = () => {
    setSuccess(false);
    setFirstNameErr("");
    setlastNameErr("");
    setemailErr("");
    setcountryErr("");
    setstateErr("");
    setphoneNumberErr("");

    setDetails({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      country: "",
      state: "",
    });
    onClose();
  };

  const states = [
    "Abia",
    "Adamawa",
    "Akwa Ibom",
    "Anambra",
    "Bauchi",
    "Bayelsa",
    "Benue",
    "Borno",
    "Cross River",
    "Delta",
    "Ebonyi",
    "Edo",
    "Ekiti",
    "Enugu",
    "FCT - Abuja",
    "Gombe",
    "Imo",
    "Jigawa",
    "Kaduna",
    "Kano",
    "Katsina",
    "Kebbi",
    "Kogi",
    "Kwara",
    "Lagos",
    "Nasarawa",
    "Niger",
    "Ogun",
    "Ondo",
    "Osun",
    "Oyo",
    "Plateau",
    "Rivers",
    "Sokoto",
    "Taraba",
    "Yobe",
    "Zamfara",
  ];

  return (
    <Modal size="lg" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      {success ? (
        <ModalContent>
          <ModalCloseButton
            onClick={handleClose}
            color="#1E363F"
            bg="#E5E5E5"
            rounded="50%"
          />

          <ModalBody mt="50px" px={{ base: "15px", md: "30px" }}>
            <Text fontSize="20px" textAlign="center">
              Thanks for Joining us
            </Text>
            <Button
              mt={4}
              mb={6}
              variant="action"
              color="white"
              py={{ base: 6, md: 8 }}
              fontSize="18px"
              fontWeight="500"
              w="100%"
              onClick={handleClose}
            >
              Close
            </Button>
          </ModalBody>
        </ModalContent>
      ) : (
        <ModalContent>
          <ModalCloseButton
            onClick={handleClose}
            color="#1E363F"
            bg="#E5E5E5"
            rounded="50%"
          />

          <ModalBody mt="50px" px={{ base: "15px", md: "30px" }}>
            <Stack spacing="15px" direction={["column"]}>
              <Box>
                <Input
                  id="firstName"
                  onChange={handleDetails}
                  placeholder="First Name"
                />

                <Text textAlign="center" fontSize="14px" color="red">
                  {firstNameErr && firstNameErr}
                </Text>
              </Box>
              <Box>
                <Input
                  id="lastName"
                  onChange={handleDetails}
                  placeholder="Last Name"
                />
                <Text textAlign="center" fontSize="14px" color="red">
                  {lastNameErr && lastNameErr}
                </Text>
              </Box>

              <Box>
                <Input
                  id="email"
                  onChange={handleDetails}
                  placeholder="Email"
                />
                <Text textAlign="center" fontSize="14px" color="red">
                  {emailErr && emailErr}
                </Text>
              </Box>
              <Box>
                <Input
                  id="phoneNumber"
                  type="number"
                  onChange={handleDetails}
                  placeholder="Phone Number"
                />
                <Text textAlign="center" fontSize="14px" color="red">
                  {phoneNumberErr && phoneNumberErr}
                </Text>
              </Box>
              {/* <Stack direction={["row"]}> */}
              <Box>
                <Select
                  id="country"
                  onChange={handleDetails}
                  placeholder="Country"
                >
                  {countries.map((country, i) => (
                    <option value={country.name} key={i}>
                      {country.name}
                    </option>
                  ))}
                </Select>

                <Text textAlign="center" fontSize="14px" color="red">
                  {countryErr && countryErr}
                </Text>
              </Box>

              {details.country === "Nigeria" && (
                <Box>
                  <Select
                    id="state"
                    onChange={handleDetails}
                    placeholder="State"
                  >
                    {states.map((state, i) => (
                      <option value={state} key={i}>
                        {state}
                      </option>
                    ))}
                  </Select>

                  <Text textAlign="center" fontSize="14px" color="red">
                    {stateErr && stateErr}
                  </Text>
                </Box>
              )}
              {/* </Stack> */}

              {/* <Input placeholder="Country" />
            <Input placeholder="State" /> */}
            </Stack>
            <Button
              mt={4}
              mb={6}
              variant="action"
              color="white"
              py={{ base: 6, md: 8 }}
              fontSize="18px"
              fontWeight="500"
              w="100%"
              onClick={submitDetails}
            >
              Join Us
            </Button>
          </ModalBody>
        </ModalContent>
      )}
    </Modal>
  );
}
