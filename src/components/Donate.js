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

const Donate = () => {
  const countryline = [
    { name: "Israel", dial_code: "+972", code: "IL" },
    { name: "Afghanistan", dial_code: "+93", code: "AF" },
    { name: "Albania", dial_code: "+355", code: "AL" },
    { name: "Algeria", dial_code: "+213", code: "DZ" },
    { name: "AmericanSamoa", dial_code: "+1 684", code: "AS" },
    { name: "Andorra", dial_code: "+376", code: "AD" },
    { name: "Angola", dial_code: "+244", code: "AO" },
    { name: "Anguilla", dial_code: "+1 264", code: "AI" },
    { name: "Antigua and Barbuda", dial_code: "+1268", code: "AG" },
    { name: "Argentina", dial_code: "+54", code: "AR" },
    { name: "Armenia", dial_code: "+374", code: "AM" },
    { name: "Aruba", dial_code: "+297", code: "AW" },
    { name: "Australia", dial_code: "+61", code: "AU" },
    { name: "Austria", dial_code: "+43", code: "AT" },
    { name: "Azerbaijan", dial_code: "+994", code: "AZ" },
    { name: "Bahamas", dial_code: "+1 242", code: "BS" },
    { name: "Bahrain", dial_code: "+973", code: "BH" },
    { name: "Bangladesh", dial_code: "+880", code: "BD" },
    { name: "Barbados", dial_code: "+1 246", code: "BB" },
    { name: "Belarus", dial_code: "+375", code: "BY" },
    { name: "Belgium", dial_code: "+32", code: "BE" },
    { name: "Belize", dial_code: "+501", code: "BZ" },
    { name: "Benin", dial_code: "+229", code: "BJ" },
    { name: "Bermuda", dial_code: "+1 441", code: "BM" },
    { name: "Bhutan", dial_code: "+975", code: "BT" },
    { name: "Bosnia and Herzegovina", dial_code: "+387", code: "BA" },
    { name: "Botswana", dial_code: "+267", code: "BW" },
    { name: "Brazil", dial_code: "+55", code: "BR" },
    { name: "British Indian Ocean Territory", dial_code: "+246", code: "IO" },
    { name: "Bulgaria", dial_code: "+359", code: "BG" },
    { name: "Burkina Faso", dial_code: "+226", code: "BF" },
    { name: "Burundi", dial_code: "+257", code: "BI" },
    { name: "Cambodia", dial_code: "+855", code: "KH" },
    { name: "Cameroon", dial_code: "+237", code: "CM" },
    { name: "Canada", dial_code: "+1", code: "CA" },
    { name: "Cape Verde", dial_code: "+238", code: "CV" },
    { name: "Cayman Islands", dial_code: "+ 345", code: "KY" },
    { name: "Central African Republic", dial_code: "+236", code: "CF" },
    { name: "Chad", dial_code: "+235", code: "TD" },
    { name: "Chile", dial_code: "+56", code: "CL" },
    { name: "China", dial_code: "+86", code: "CN" },
    { name: "Christmas Island", dial_code: "+61", code: "CX" },
    { name: "Colombia", dial_code: "+57", code: "CO" },
    { name: "Comoros", dial_code: "+269", code: "KM" },
    { name: "Congo", dial_code: "+242", code: "CG" },
    { name: "Cook Islands", dial_code: "+682", code: "CK" },
    { name: "Costa Rica", dial_code: "+506", code: "CR" },
    { name: "Croatia", dial_code: "+385", code: "HR" },
    { name: "Cuba", dial_code: "+53", code: "CU" },
    { name: "Cyprus", dial_code: "+537", code: "CY" },
    { name: "Czech Republic", dial_code: "+420", code: "CZ" },
    { name: "Denmark", dial_code: "+45", code: "DK" },
    { name: "Djibouti", dial_code: "+253", code: "DJ" },
    { name: "Dominica", dial_code: "+1 767", code: "DM" },
    { name: "Dominican Republic", dial_code: "+1 849", code: "DO" },
    { name: "Ecuador", dial_code: "+593", code: "EC" },
    { name: "Egypt", dial_code: "+20", code: "EG" },
    { name: "El Salvador", dial_code: "+503", code: "SV" },
    { name: "Equatorial Guinea", dial_code: "+240", code: "GQ" },
    { name: "Eritrea", dial_code: "+291", code: "ER" },
    { name: "Estonia", dial_code: "+372", code: "EE" },
    { name: "Ethiopia", dial_code: "+251", code: "ET" },
    { name: "Faroe Islands", dial_code: "+298", code: "FO" },
    { name: "Fiji", dial_code: "+679", code: "FJ" },
    { name: "Finland", dial_code: "+358", code: "FI" },
    { name: "France", dial_code: "+33", code: "FR" },
    { name: "French Guiana", dial_code: "+594", code: "GF" },
    { name: "French Polynesia", dial_code: "+689", code: "PF" },
    { name: "Gabon", dial_code: "+241", code: "GA" },
    { name: "Gambia", dial_code: "+220", code: "GM" },
    { name: "Georgia", dial_code: "+995", code: "GE" },
    { name: "Germany", dial_code: "+49", code: "DE" },
    { name: "Ghana", dial_code: "+233", code: "GH" },
    { name: "Gibraltar", dial_code: "+350", code: "GI" },
    { name: "Greece", dial_code: "+30", code: "GR" },
    { name: "Greenland", dial_code: "+299", code: "GL" },
    { name: "Grenada", dial_code: "+1 473", code: "GD" },
    { name: "Guadeloupe", dial_code: "+590", code: "GP" },
    { name: "Guam", dial_code: "+1 671", code: "GU" },
    { name: "Guatemala", dial_code: "+502", code: "GT" },
    { name: "Guinea", dial_code: "+224", code: "GN" },
    { name: "Guinea-Bissau", dial_code: "+245", code: "GW" },
    { name: "Guyana", dial_code: "+595", code: "GY" },
    { name: "Haiti", dial_code: "+509", code: "HT" },
    { name: "Honduras", dial_code: "+504", code: "HN" },
    { name: "Hungary", dial_code: "+36", code: "HU" },
    { name: "Iceland", dial_code: "+354", code: "IS" },
    { name: "India", dial_code: "+91", code: "IN" },
    { name: "Indonesia", dial_code: "+62", code: "ID" },
    { name: "Iraq", dial_code: "+964", code: "IQ" },
    { name: "Ireland", dial_code: "+353", code: "IE" },
    { name: "Israel", dial_code: "+972", code: "IL" },
    { name: "Italy", dial_code: "+39", code: "IT" },
    { name: "Jamaica", dial_code: "+1 876", code: "JM" },
    { name: "Japan", dial_code: "+81", code: "JP" },
    { name: "Jordan", dial_code: "+962", code: "JO" },
    { name: "Kazakhstan", dial_code: "+7 7", code: "KZ" },
    { name: "Kenya", dial_code: "+254", code: "KE" },
    { name: "Kiribati", dial_code: "+686", code: "KI" },
    { name: "Kuwait", dial_code: "+965", code: "KW" },
    { name: "Kyrgyzstan", dial_code: "+996", code: "KG" },
    { name: "Latvia", dial_code: "+371", code: "LV" },
    { name: "Lebanon", dial_code: "+961", code: "LB" },
    { name: "Lesotho", dial_code: "+266", code: "LS" },
    { name: "Liberia", dial_code: "+231", code: "LR" },
    { name: "Liechtenstein", dial_code: "+423", code: "LI" },
    { name: "Lithuania", dial_code: "+370", code: "LT" },
    { name: "Luxembourg", dial_code: "+352", code: "LU" },
    { name: "Madagascar", dial_code: "+261", code: "MG" },
    { name: "Malawi", dial_code: "+265", code: "MW" },
    { name: "Malaysia", dial_code: "+60", code: "MY" },
    { name: "Maldives", dial_code: "+960", code: "MV" },
    { name: "Mali", dial_code: "+223", code: "ML" },
    { name: "Malta", dial_code: "+356", code: "MT" },
    { name: "Marshall Islands", dial_code: "+692", code: "MH" },
    { name: "Martinique", dial_code: "+596", code: "MQ" },
    { name: "Mauritania", dial_code: "+222", code: "MR" },
    { name: "Mauritius", dial_code: "+230", code: "MU" },
    { name: "Mayotte", dial_code: "+262", code: "YT" },
    { name: "Mexico", dial_code: "+52", code: "MX" },
    { name: "Monaco", dial_code: "+377", code: "MC" },
    { name: "Mongolia", dial_code: "+976", code: "MN" },
    { name: "Montenegro", dial_code: "+382", code: "ME" },
    { name: "Montserrat", dial_code: "+1664", code: "MS" },
    { name: "Morocco", dial_code: "+212", code: "MA" },
    { name: "Myanmar", dial_code: "+95", code: "MM" },
    { name: "Namibia", dial_code: "+264", code: "NA" },
    { name: "Nauru", dial_code: "+674", code: "NR" },
    { name: "Nepal", dial_code: "+977", code: "NP" },
    { name: "Netherlands", dial_code: "+31", code: "NL" },
    { name: "Netherlands Antilles", dial_code: "+599", code: "AN" },
    { name: "New Caledonia", dial_code: "+687", code: "NC" },
    { name: "New Zealand", dial_code: "+64", code: "NZ" },
    { name: "Nicaragua", dial_code: "+505", code: "NI" },
    { name: "Niger", dial_code: "+227", code: "NE" },
    { name: "Nigeria", dial_code: "+234", code: "NG" },
    { name: "Niue", dial_code: "+683", code: "NU" },
    { name: "Norfolk Island", dial_code: "+672", code: "NF" },
    { name: "Northern Mariana Islands", dial_code: "+1 670", code: "MP" },
    { name: "Norway", dial_code: "+47", code: "NO" },
    { name: "Oman", dial_code: "+968", code: "OM" },
    { name: "Pakistan", dial_code: "+92", code: "PK" },
    { name: "Palau", dial_code: "+680", code: "PW" },
    { name: "Panama", dial_code: "+507", code: "PA" },
    { name: "Papua New Guinea", dial_code: "+675", code: "PG" },
    { name: "Paraguay", dial_code: "+595", code: "PY" },
    { name: "Peru", dial_code: "+51", code: "PE" },
    { name: "Philippines", dial_code: "+63", code: "PH" },
    { name: "Poland", dial_code: "+48", code: "PL" },
    { name: "Portugal", dial_code: "+351", code: "PT" },
    { name: "Puerto Rico", dial_code: "+1 939", code: "PR" },
    { name: "Qatar", dial_code: "+974", code: "QA" },
    { name: "Romania", dial_code: "+40", code: "RO" },
    { name: "Rwanda", dial_code: "+250", code: "RW" },
    { name: "Samoa", dial_code: "+685", code: "WS" },
    { name: "San Marino", dial_code: "+378", code: "SM" },
    { name: "Saudi Arabia", dial_code: "+966", code: "SA" },
    { name: "Senegal", dial_code: "+221", code: "SN" },
    { name: "Serbia", dial_code: "+381", code: "RS" },
    { name: "Seychelles", dial_code: "+248", code: "SC" },
    { name: "Sierra Leone", dial_code: "+232", code: "SL" },
    { name: "Singapore", dial_code: "+65", code: "SG" },
    { name: "Slovakia", dial_code: "+421", code: "SK" },
    { name: "Slovenia", dial_code: "+386", code: "SI" },
    { name: "Solomon Islands", dial_code: "+677", code: "SB" },
    { name: "South Africa", dial_code: "+27", code: "ZA" },
    {
      name: "South Georgia and the South Sandwich Islands",
      dial_code: "+500",
      code: "GS",
    },
    { name: "Spain", dial_code: "+34", code: "ES" },
    { name: "Sri Lanka", dial_code: "+94", code: "LK" },
    { name: "Sudan", dial_code: "+249", code: "SD" },
    { name: "Suriname", dial_code: "+597", code: "SR" },
    { name: "Swaziland", dial_code: "+268", code: "SZ" },
    { name: "Sweden", dial_code: "+46", code: "SE" },
    { name: "Switzerland", dial_code: "+41", code: "CH" },
    { name: "Tajikistan", dial_code: "+992", code: "TJ" },
    { name: "Thailand", dial_code: "+66", code: "TH" },
    { name: "Togo", dial_code: "+228", code: "TG" },
    { name: "Tokelau", dial_code: "+690", code: "TK" },
    { name: "Tonga", dial_code: "+676", code: "TO" },
    { name: "Trinidad and Tobago", dial_code: "+1 868", code: "TT" },
    { name: "Tunisia", dial_code: "+216", code: "TN" },
    { name: "Turkey", dial_code: "+90", code: "TR" },
    { name: "Turkmenistan", dial_code: "+993", code: "TM" },
    { name: "Turks and Caicos Islands", dial_code: "+1 649", code: "TC" },
    { name: "Tuvalu", dial_code: "+688", code: "TV" },
    { name: "Uganda", dial_code: "+256", code: "UG" },
    { name: "Ukraine", dial_code: "+380", code: "UA" },
    { name: "United Arab Emirates", dial_code: "+971", code: "AE" },
    { name: "United Kingdom", dial_code: "+44", code: "GB" },
    { name: "United States", dial_code: "+1", code: "US" },
    { name: "Uruguay", dial_code: "+598", code: "UY" },
    { name: "Uzbekistan", dial_code: "+998", code: "UZ" },
    { name: "Vanuatu", dial_code: "+678", code: "VU" },
    { name: "Wallis and Futuna", dial_code: "+681", code: "WF" },
    { name: "Yemen", dial_code: "+967", code: "YE" },
    { name: "Zambia", dial_code: "+260", code: "ZM" },
    { name: "Zimbabwe", dial_code: "+263", code: "ZW" },
    { name: "land Islands", dial_code: "", code: "AX" },
    { name: "Antarctica", dial_code: null, code: "AQ" },
    { name: "Bolivia, Plurinational State of", dial_code: "+591", code: "BO" },
    { name: "Brunei Darussalam", dial_code: "+673", code: "BN" },
    { name: "Cocos (Keeling) Islands", dial_code: "+61", code: "CC" },
    {
      name: "Congo, The Democratic Republic of the",
      dial_code: "+243",
      code: "CD",
    },
    { name: "Cote d'Ivoire", dial_code: "+225", code: "CI" },
    { name: "Falkland Islands (Malvinas)", dial_code: "+500", code: "FK" },
    { name: "Guernsey", dial_code: "+44", code: "GG" },
    { name: "Holy See (Vatican City State)", dial_code: "+379", code: "VA" },
    { name: "Hong Kong", dial_code: "+852", code: "HK" },
    { name: "Iran, Islamic Republic of", dial_code: "+98", code: "IR" },
    { name: "Isle of Man", dial_code: "+44", code: "IM" },
    { name: "Jersey", dial_code: "+44", code: "JE" },
    {
      name: "Korea, Democratic People's Republic of",
      dial_code: "+850",
      code: "KP",
    },
    { name: "Korea, Republic of", dial_code: "+82", code: "KR" },
    { name: "Lao People's Democratic Republic", dial_code: "+856", code: "LA" },
    { name: "Libyan Arab Jamahiriya", dial_code: "+218", code: "LY" },
    { name: "Macao", dial_code: "+853", code: "MO" },
    {
      name: "Macedonia, The Former Yugoslav Republic of",
      dial_code: "+389",
      code: "MK",
    },
    { name: "Micronesia, Federated States of", dial_code: "+691", code: "FM" },
    { name: "Moldova, Republic of", dial_code: "+373", code: "MD" },
    { name: "Mozambique", dial_code: "+258", code: "MZ" },
    { name: "Palestinian Territory, Occupied", dial_code: "+970", code: "PS" },
    { name: "Pitcairn", dial_code: "+872", code: "PN" },
    { name: "Réunion", dial_code: "+262", code: "RE" },
    { name: "Russia", dial_code: "+7", code: "RU" },
    { name: "Saint Barthélemy", dial_code: "+590", code: "BL" },
    {
      name: "Saint Helena, Ascension and Tristan Da Cunha",
      dial_code: "+290",
      code: "SH",
    },
    { name: "Saint Kitts and Nevis", dial_code: "+1 869", code: "KN" },
    { name: "Saint Lucia", dial_code: "+1 758", code: "LC" },
    { name: "Saint Martin", dial_code: "+590", code: "MF" },
    { name: "Saint Pierre and Miquelon", dial_code: "+508", code: "PM" },
    {
      name: "Saint Vincent and the Grenadines",
      dial_code: "+1 784",
      code: "VC",
    },
    { name: "Sao Tome and Principe", dial_code: "+239", code: "ST" },
    { name: "Somalia", dial_code: "+252", code: "SO" },
    { name: "Svalbard and Jan Mayen", dial_code: "+47", code: "SJ" },
    { name: "Syrian Arab Republic", dial_code: "+963", code: "SY" },
    { name: "Taiwan, Province of China", dial_code: "+886", code: "TW" },
    { name: "Tanzania, United Republic of", dial_code: "+255", code: "TZ" },
    { name: "Timor-Leste", dial_code: "+670", code: "TL" },
    { name: "Venezuela, Bolivarian Republic of", dial_code: "+58", code: "VE" },
    { name: "Viet Nam", dial_code: "+84", code: "VN" },
    { name: "Virgin Islands, British", dial_code: "+1 284", code: "VG" },
    { name: "Virgin Islands, U.S.", dial_code: "+1 340", code: "VI" },
  ];

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

  const handleDonateModal = () => {
    if (amount <= 0) {
      setError("The amount cannot be zero");
    } else if (email == "") {
      setMailError("Email cannot be empty");
    } else {
      setError("");
      paymentOpen();
      // initializePayment(onSuccess, onClose);
    }
  };

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
    <Flex gap={{ base: 3, md: 12 }} direction={{ base: "column", md: "row" }}>
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
                onClick={() =>
                  setAmount(pr[currency].slice(1).replace(/\,/g, ""))
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
              placeholder="Enter Amount"
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
                if (newEmail.length){
                    if (validator.isEmail(newEmail) && newEmail !== "") {
                        setMailError("");
                        setEmail(newEmail);
                      } else {
                        setMailError("Invalid Email Address");
                      } 
                } else {
                    setEmail("")
                    
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
                  {countryline
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
                disabled={validator.isEmail(email) && email.length ?  false : mailError.length ? true :  true}
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
