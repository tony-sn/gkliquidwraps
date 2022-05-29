import { Container, Heading, Center } from "@chakra-ui/react";

import Section from "components/section";

const Contact = () => {
	return (
		<>
			<Container maxW="container.xl">
				<Center>
					<Heading as="h3">Contact</Heading>
				</Center>
			</Container>
			<br />
			<Section delay={0.1}>
				<Center>
					<p>Coming Soon!</p>
				</Center>
			</Section>
		</>
	);
};

export default Contact;
