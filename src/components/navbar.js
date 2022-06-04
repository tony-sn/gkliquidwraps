import { useState } from "react";

import NextLink from "next/link";
import {
	Container,
	Box,
	Heading,
	Stack,
	Flex,
	useColorMode,
	useColorModeValue,
	Link,
	Menu,
	MenuItem,
	MenuList,
	MenuButton,
	IconButton,
} from "@chakra-ui/react";

import Logo from "./logo";
import ThemeSwitcher from "./themeSwitcher";
import AnimatedMenuButton from "./menuButton";
import styles from "@styles/Button";

export const LinkItem = ({ href, path, children }) => {
	const active = path === href;
	const inactiveColor = useColorModeValue("gray.900", "whiteAlpha.900");
	return (
		<NextLink href={href}>
			<Link
				p={2}
				bg={active ? "glassTeal" : undefined}
				color={active ? "#202023" : inactiveColor}
			>
				{children}
			</Link>
		</NextLink>
	);
};

const Navbar = (props) => {
	const { path } = props;
	const { toggleColorMode } = useColorMode();
	const [isOpen, setOpen] = useState(false);

	return (
		<Box
			position="fixed"
			as="nav"
			w="100%"
			bg={useColorModeValue("#ffffff40", "#20202380")}
			css={{ backdropFilter: "blur(10px)" }}
			zIndex={1}
			{...props}
		>
			<Container
				display="flex"
				p={2}
				maxW="container.xl"
				wrap="wrap"
				align="center"
				justify="space-between"
			>
				<Flex align="center" mr={5}>
					<Heading as="h1" size="lg" letterSpacing={"tighter"}>
						<Logo />
					</Heading>
				</Flex>

				<Stack
					// LINK: Home, care: liquid wrap after care, shop, gallery, colours, pricing, quotes (map, quote), contact
					direction={{ base: "column", md: "row" }}
					display={{ base: "none", md: "flex" }}
					width={{ base: "full", md: "auto" }}
					alignItems="center"
					flexGrow={1}
					mt={{ base: 4, md: 0 }}
				>
					<LinkItem href="/">Home</LinkItem>
					<LinkItem href="/care">Care</LinkItem>
					<LinkItem href="/gallery">Gallery</LinkItem>
					<LinkItem href="/colours">Colours</LinkItem>
					{/* <LinkItem href="/pricing">Pricing</LinkItem> */}
					<LinkItem href="/penisula">Penisula</LinkItem>
					<LinkItem href="/contact">Contact</LinkItem>
				</Stack>

				<Box flex={1} align="right">
					<Box display={{ base: "none", md: "inline-block" }}>
						<ThemeSwitcher />
					</Box>

					<Box ml={2} display={{ base: "inline-block", md: "none" }}>
						<Menu>
							<MenuButton
								as={IconButton}
								className={styles.menuButton}
								icon={
									<AnimatedMenuButton
										isOpen={isOpen}
										onClick={() => setOpen(!isOpen)}
										strokeWidth="6"
										color="#ff6666"
										lineProps={{ strokeLinecap: "round" }}
										transition={{ type: "spring", stiffness: 260, damping: 20 }}
										width="48"
										height="18"
									/>
								}
								variant="outline"
								aria-label="Menu Options"
							/>
							<MenuList
								style={{ borderRadius: 0 }}
								w="100vw"
								onClick={() => setOpen(false)}
							>
								<NextLink href="/" passHref>
									<MenuItem as={Link}>Home</MenuItem>
								</NextLink>
								<NextLink href="/care" passHref>
									<MenuItem as={Link}>Care</MenuItem>
								</NextLink>
								<NextLink href="/gallery" passHref>
									<MenuItem as={Link}>Gallery</MenuItem>
								</NextLink>
								<NextLink href="/colours" passHref>
									<MenuItem as={Link}>Colours</MenuItem>
								</NextLink>
								{/* <NextLink href="/pricing" passHref>
									<MenuItem as={Link}>Pricing</MenuItem>
								</NextLink> */}
								<NextLink href="/penisula" passHref>
									<MenuItem as={Link}>Penisula</MenuItem>
								</NextLink>
								<NextLink href="/contact" passHref>
									<MenuItem as={Link}>Contact</MenuItem>
								</NextLink>
								<MenuItem onClick={toggleColorMode}>
									{`Activate ${useColorModeValue("Dark", "Light")} Theme`}
								</MenuItem>
							</MenuList>
						</Menu>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default Navbar;
