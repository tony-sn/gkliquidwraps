import { Box, Stack, Divider, useColorModeValue } from "@chakra-ui/react";

import { LinkItem } from "./navbar";

const Footer = () => {
	return (
		<>
			<Divider
				borderColor={useColorModeValue("#353538", "inherit")}
				mt={{ base: 0, md: 4 }}
				opacity={useColorModeValue("0.1", "inherit")}
			/>
			<Stack
				direction={{ base: "column", md: "row" }}
				display={{ base: "flex" }}
				w={{ base: "full", md: "auto" }}
				alignItems="center"
				flexGrow={1}
				mt={{ base: 4, md: 0 }}
				justifyContent={{ base: "center", md: "space-around" }}
			>
				<LinkItem href="/">Home</LinkItem>
				<LinkItem href="/care">Care</LinkItem>
				<LinkItem href="/penisula">Penisula</LinkItem>
				<LinkItem href="/contact">Contact</LinkItem>
			</Stack>
			<Box align="center" fontSize={"sm"} opacity={0.4} mt={4}>
				&copy; {new Date().getFullYear()} <strong>GK Liquidwraps</strong>™
				<br />
				All Rights Reserved.
			</Box>
		</>
	);
};

export default Footer;
