import Logo from "./logo";
import {
	Container,
	Box,
	Heading,
	Flex,
	useColorModeValue,
} from "./ThemeSwicther";

const Navbar = (props) => {
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

				<Box flex={1} align="right">
					<ThemeSwitcher />
				</Box>
			</Container>
		</Box>
	);
};

export default Navbar;
