import React from "react";
import {
  Flex,
  Text,
  Spacer,
  Select,
  SimpleGrid,
  Button,
  Input,
  Box,
  Stack,
  useDisclosure,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import validator from "validator";
import { usePaystackPayment } from "react-paystack";
import SuccessModal from "./SuccessModal";
import PaymentModal from "./PaymentModal";
import countryline from "../components/data/country.json";

const Donate = () => {
  const countryCopy = [...countryline];

  const sortingCode = (a, b) => {
    if (a.dial_code < b.dial_code) {
      return -1;
    }
    if (a.dial_code > b.dial_code) {
      return 1;
    }
    return 0;
  };

  const sortedCode = countryCopy.sort(sortingCode);

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

  const price = [
    {
      naira: "₦100",
      dollar: "$1",
      pounds: "£1",
      euro: "€1",
    },
    {
      naira: "₦500",
      dollar: "$5",
      pounds: "£5",
      euro: "€5",
    },
    {
      naira: "₦5,000",
      dollar: "$10",
      pounds: "£10",
      euro: "€10",
    },
    {
      naira: "₦10,000",
      dollar: "$20",
      pounds: "£20",
      euro: "€20",
    },
    {
      naira: "₦50,000",
      dollar: "$100",
      pounds: "£100",
      euro: "€100",
    },
    {
      naira: "₦500,000",
      dollar: "$1,000",
      pounds: "£1,000",
      euro: "€1,000",
    },
    {
      naira: "₦1,000,000",
      dollar: "$2000",
      pounds: "£2000",
      euro: "€2000",
    },
  ];
  const { isOpen, onOpen: openModal, onClose: onCloseModal } = useDisclosure();
  const {
    isOpen: paymentisOpen,
    onOpen: paymentOpen,
    onClose: paymentClose,
  } = useDisclosure();
  const [success, setSuccess] = React.useState(false);
  const [amount, setAmount] = React.useState(0);
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState("");
  const [currency, setCurrency] = React.useState("naira");
  const [mailError, setMailError] = React.useState("");
  const [country, setCountry] = React.useState("Nigeria");
  const [state, setState] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [phoneCode, setPhoneCode] = React.useState("");
  const [age, setAge] = React.useState("");
  const [pay, setPay] = React.useState("false");
  const phone = phoneCode + phoneNumber;
  console.log({ state, country, phone, age });
  let references = new Date().getTime().toString();

  const initializePayment = usePaystackPayment({
    reference: references,
    email: email,
    amount: amount * 100,
    publicKey: "pk_live_916d97b91b3daf0a5de0798b57b852806d1443f3",
    // publicKey:"pk_test_0cf400c602268d06bbba26454b61c1a4f858f698",
  });
  const onSuccess = (reference) => {
    //    console.log('reference', reference)
    setSuccess(true);

    let payload = {
      transaction_status: "success",
      email: email,
      amount: amount,
      currency: currency,
      phone: phone,
      country: country,
      state: state,
      age: age,
      transaction_ref: reference.reference,
    };
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    // // myHeaders.append("Authorization","Bearer" + JSON.parse(localStorage.getItem('jwt')));

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(payload),
      redirect: "follow",
    };

    fetch("https://com.itskillscenter.com/api/pay", requestOptions)
      .then((response) => response.json())
      .then((response) => {
        // if(response.transaction_status==='success'){
        //     // setSuccess(true);
        // }
        //open modal
        openModal();
      })
      .catch((error) => {
        alert(
          "Something went wrong! Please check your internet connection...."
        );
        console.log("error", error);
      });
  };

  const onClose = () => {
    alert("Opps, Payment not completed");
  };

    // const handleDonateModal = () => {
    //   if (amount <= 0) {
    //     setError("The amount cannot be zero");
    //   } else if (email == "") {
    //     setMailError("Email cannot be empty");
    //   } else {
    //     setError("");
    //     paymentOpen();
    //     // initializePayment(onSuccess, onClose);
    //   }
    // };

    const handleDonateModal=()=>{
        if(error !== '' || mailError !== ''){
            return
        }else if(amount == ''){
            setError('Amount cannot be empty')
        }else if(email == ''){
            setMailError('Email Address cannot be empty')
        }else{
             setError('')
            paymentOpen()
        }
    }


  const handleDonate = () => {
    // console.log('donate clicked')
    if (amount <= 0) {
      setError("The amount cannot be zero");
    } else if (email == "") {
      setMailError("Email cannot be empty");
    } else {
      setError("");
      paymentClose();
      initializePayment(onSuccess, onClose);
    }
  };
  console.log("type", typeof amount);
  return (
    <Flex  gap={{ base: 3, md: 12 }} direction={{ base: "column", md: "row" }}>
      <Box w={{ base: "100%", md: "50%" }}>
        <Flex
          w={{ base: "100%", md: "100%" }}
          py={{ base: "20px", md: "80px" }}
          direction="column"
          gap={4}
        >
          <Text fontSize={{ base: "40px", md: "70px" }} fontWeight="700">
            Support our Mission
          </Text>
          <Text
            textAlign="justify"
            fontSize={{ base: "14px", md: "18px" }}
            fontWeight="400"
            color="darkgreen"
          >
            Elections are expensive. They still cost billions of Naira. Osinbajo
            has never been a “money bag.” We need your help.
          </Text>
          <Text
            textAlign="justify"
            fontSize={{ base: "14px", md: "18px" }}
            fontWeight="400"
            color="darkgreen"
          >
            We work every day investing in public and grassroot campaign
            infrastructure, taking YOUR message to delegates. None of this work
            is possible without your support.
          </Text>
          {/* <Text textAlign='justify' fontSize={{base:'14px', md:'18px'}} fontWeight='400' color='darkgreen'>This campaign is led by everyday Nigerians telling themselves the truth: that Osinbajo is competent, experienced, and prepared to fix Nigeria. The best choice, if not the ONLY choice.</Text> */}
          <Text
            textAlign="justify"
            fontSize={{ base: "14px", md: "18px" }}
            fontWeight="400"
            color="darkgreen"
          >
            Please support us financially. Also let us know your email address –
            so we can thank you personally, and inform you of our activities
            from funds raised. Thank you for your support!
          </Text>
          <Text
            textAlign="justify"
            fontSize={{ base: "14px", md: "18px" }}
            fontWeight="400"
            color="darkgreen"
          >
            Join us to help take the Mission further!
          </Text>
        </Flex>
      </Box>
      <Box w={{ base: "100%", md: "50%" }}>
        <Flex
          direction="column"
          bg="white"
          rounded={{ base: "12px", md: "24px" }}
          p={{ base: 3, md: 12 }}
          w={{ base: "100%", md: "100%" }}
        >
          <Stack
            flexDirection={{ base: "column-reverse", md: "initial" }}
            direction={["column", "row"]}
            w="100%"
          >
            <Box w={{ base: "100%", md: "70%" }}>
              <Text
                fontSize={{ base: "18px", md: "24px" }}
                fontWeight="600"
                color="darkgreen"
                w="100%"
                textAlign={{ base: "center", md: "initial" }}
                display={{ base: "none", md: "initial" }}
              >
                Choose an amount:
              </Text>

              <Text
                fontSize={{ base: "14px", md: "18px" }}
                fontWeight="400"
                color="disable"
                w="100%"
                textAlign={{ base: "center", md: "initial" }}
              >
                How much do you want to donate to this campaign?
              </Text>
            </Box>
            <Spacer />
            <Box w={{ base: "100%", md: "30%" }}>
              <Box display={{ base: "initial", md: "none" }} w="100%">
                <Text
                  fontSize={{ base: "18px", md: "24px" }}
                  fontWeight="600"
                  color="darkgreen"
                  textAlign={{ base: "center", md: "initial" }}
                >
                  Choose an amount:
                </Text>
              </Box>

              <Select
                placeholder=""
                w={{ base: "100%", md: "80%" }}
                onChange={(e) => setCurrency(e.target.value)}
              >
                <option value="naira" selected>
                  Naira
                </option>
                <option value="dollar">USD</option>
                <option value="pounds">GBP</option>
                <option value="euro">EUR</option>
              </Select>
            </Box>
          </Stack>
          <SimpleGrid
            columns={3}
            spacing={{ base: 2, md: 4 }}
            py={{ base: 4, md: 8 }}
          >
            {price.map((pr, index) => (
              <Button
                key={index}
                variant="outline"
                fontSize={{ base: "13px", md: "15px" }}
                fontWeight="500"
                color="darkgreen"
                onClick={() => {

                    setAmount(pr[currency].slice(1).replace(/\,/g, ""))
                    setError("")
                }
                 
                }
              >
                {pr[currency]}
              </Button>
            ))}
            {/* <Button variant='outline' fontSize={{base:'13px', md:'15px'}} fontWeight='500' color='darkgreen' onClick={()=>setAmount('5000')}>₦5,000</Button>
                            <Button variant='outline' fontSize={{base:'13px', md:'15px'}} fontWeight='500' color='darkgreen' onClick={()=>setAmount('10000')}>₦10,000</Button>
                            <Button variant='outline' fontSize={{base:'13px', md:'15px'}} fontWeight='500' color='darkgreen' onClick={()=>setAmount('50000')}>₦50,000</Button>
                            <Button variant='outline' fontSize={{base:'13px', md:'15px'}} fontWeight='500' color='darkgreen' onClick={()=>setAmount('100000')}>₦100,000</Button>
                            <Button variant='outline' fontSize={{base:'13px', md:'15px'}} fontWeight='500' color='darkgreen' onClick={()=>setAmount('500000')}>₦500,000</Button>
                            <Button variant='outline' fontSize={{base:'13px', md:'15px'}} fontWeight='500' color='darkgreen' onClick={()=>setAmount('1000000')}>₦1,000,000</Button> */}
          </SimpleGrid>
          <Flex direction="column" py={2} gap={1}>
            <Input
              type="number"
              placeholder="Enter Your Preferred Amount"
              color="darkgreen"
              fontSize="16px"
              fontWeight="400"
              value={amount !== 0 ? amount : ""}
              onChange={(e) => {
                const newAmount = e.target.value;
                if (newAmount <= 0) {
                  setAmount(e.target.value);

                  setError("The amount cannot be zero");
                } else {
                  setAmount(newAmount);
                  setError("");
                }
              }}
              required
            />
            {error !== "" && (
              <Text
                as="span"
                fontSize={{ base: "12px", md: "12px" }}
                fontWeight="400"
                color="red"
              >
                {error}
              </Text>
            )}

            <Text
              as="span"
              fontSize={{ base: "12px", md: "14px" }}
              fontWeight="400"
              color="darkgreen"
            >
              There is no minimum amount
            </Text>
          </Flex>
          <Flex direction="column" py={2} gap={1}>
            <Text
              as="span"
              fontSize={{ base: "12px", md: "14px" }}
              fontWeight="400"
              color="darkgreen"
            >
              Email Address
            </Text>
            <Input
              text="email"
              placeholder="Enter your email address"
              color="darkgreen"
              fontSize="16px"
              fontWeight="400"
              required
              onChange={(e) => {
                const newEmail = e.target.value;

                if (validator.isEmail(newEmail) && newEmail !== "") {
                  setMailError("");
                  setEmail(newEmail);
                } else {
                  setMailError("Invalid Email Address");
                }
              }}
            />
            {mailError !== "" && (
              <Text
                as="span"
                fontSize={{ base: "12px", md: "12px" }}
                fontWeight="400"
                color="red"
              >
                {mailError}
              </Text>
            )}
          </Flex>
          <Flex direction="column" py={2} gap={1}>
            <Text
              as="span"
              fontSize={{ base: "12px", md: "14px" }}
              fontWeight="400"
              color="darkgreen"
            >
              Phone Number (Optional)
            </Text>
            <InputGroup>
              <InputLeftAddon children="+234">
                <Select onChange={(e) => setPhoneCode(e.target.value)}>
                  {sortedCode
                    .sort((a, b) => a - b)
                    .map((line, index) =>
                      line.dial_code === "+234" ? (
                        <option key={index} value={line.dial_code} selected>
                          {line.dial_code}
                        </option>
                      ) : (
                        <option key={index} value={line.dial_code}>
                          {line.dial_code}
                        </option>
                      )
                    )}
                  {/* <option>+234</option>
                                    <option>+444</option> */}
                </Select>
              </InputLeftAddon>
              <Input
                type="tel"
                placeholder="phone number"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </InputGroup>
          </Flex>
          <Flex direction="column" py={2} gap={1}>
            <Text
              as="span"
              fontSize={{ base: "12px", md: "14px" }}
              fontWeight="400"
              color="darkgreen"
            >
              Where do you reside?
            </Text>
            <Select
              placeholder="Select Country"
              w={{ base: "100%", md: "100%" }}
              onChange={(e) => setCountry(e.target.value)}
            >
              {countryline.map((country, index) =>
                country.name === "Nigeria" ? (
                  <option value={country.name} selected>
                    {country.name}
                  </option>
                ) : (
                  <option value={country.name}>{country.name}</option>
                )
              )}
            </Select>
          </Flex>
          {country === "Nigeria" && (
            <Flex direction="column" py={2} gap={1}>
              <Text
                as="span"
                fontSize={{ base: "12px", md: "14px" }}
                fontWeight="400"
                color="darkgreen"
              >
                What state do you reside?
              </Text>
              <Select
                placeholder="Select State"
                w={{ base: "100%", md: "100%" }}
                onChange={(e) => setState(e.target.value)}
              >
                {states.map((state, index) => (
                  <option value={state} selected>
                    {state}
                  </option>
                ))}
              </Select>
            </Flex>
          )}

          <Flex direction="column" py={2} gap={1}>
            <Text
              as="span"
              fontSize={{ base: "12px", md: "14px" }}
              fontWeight="400"
              color="darkgreen"
            >
              What’s your age bracket please?
            </Text>
            <Select onChange={(e) => setAge(e.target.value)}>
              <option value="18-25" selected>
                18-25
              </option>
              <option value="26-40">26-40</option>
              <option value="41-60">41-60</option>
              <option value="61 and Above">61 and Above</option>
            </Select>
          </Flex>

          <Flex py={4} w="100%">
            {currency === "naira" ? (
              <Button
                variant="action"
                color="white"
                py={{ base: 6, md: 8 }}
                fontSize="18px"
                fontWeight="500"
                w="100%"
                onClick={() => handleDonateModal()}
              >
                DONATE NOW
              </Button>
            ) : (
              <Button
                variant="action"
                color="white"
                py={{ base: 6, md: 8 }}
                fontSize="18px"
                fontWeight="500"
                w="100%"
              >
                OTHER CURRENCIES UNAVAILABLE
              </Button>
            )}
          </Flex>
          <Flex
            direction="column"
            py={2}
            bgColor="#F7F7F7"
            rounded="10px"
            px={4}
          >
            <Text color="believe" fontSize="12px" fontWeight="600">
              Back it because you believe in it.
            </Text>
            <Text color="support" fontSize="12px" fontWeight="400">
              Support our Campaign for a Better Nigeria.
            </Text>
          </Flex>
        </Flex>
      </Box>
      <SuccessModal isOpen={isOpen} onOpen={openModal} onClose={onCloseModal} />
      <PaymentModal
        isOpen={paymentisOpen}
        onOpen={paymentOpen}
        onClose={paymentClose}
        pay={handleDonate}
      />
    </Flex>
  );
};

export default Donate;
