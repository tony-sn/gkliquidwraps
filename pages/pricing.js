import { Container, Heading, Center } from "@chakra-ui/react";

import Section from "components/section";

const Pricing = () => {
	return (
		<>
			<Container maxW="container.xl">
				<Center>
					<Heading as="h3">Pricing</Heading>
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

export default Pricing;
