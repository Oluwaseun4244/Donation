import React from 'react';
import { Flex, Box, Button, Text, Image, Spacer, useDisclosure } from '@chakra-ui/react';
import logoPng from '../assets/images/logo.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import DrawerComponent from './DrawerComponent';

const Navbar = ({ click, about, home, contact }) => {
	const [ open, setOpen ] = React.useState(false);
	const handleModal = () => {
		setOpen(true);
	};

	return (
		<Flex px={{ base: '20px', md: '150px' }} py={{ base: '12px', md: '38px' }} h="20%" w="100%">
			<Box>
				<Image src={logoPng} alt="logo" />
			</Box>
			<Spacer />
			<Flex
				color="white"
				align="center"
				fontSize="16px"
				fontWeight="500"
				gap={12}
				display={{ base: 'none', md: 'flex' }}
			>
				<Flex gap={8}>
					<Text onClick={home} cursor="pointer">
						Home
					</Text>
					<Text onClick={about} cursor="pointer">
						About
					</Text>
					<Text onClick={contact} cursor="pointer">
						Contact
					</Text>
				</Flex>
				<Button variant="action" p={6} onClick={click}>
					DONATE
				</Button>
			</Flex>
			<Flex display={{ base: 'flex', md: 'none' }} color="green">
				<GiHamburgerMenu onClick={() => handleModal('donateSection')} />
			</Flex>
			<DrawerComponent open={open} close={setOpen} home={home} about={about} contact={contact} click={click} />
		</Flex>
	);
};

export default Navbar;
