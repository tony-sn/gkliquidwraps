import { Container, Heading, Center } from '@chakra-ui/react'

import Section from 'components/section'
import Table from 'components/table'

const Penisula = () => {
	return (
		<Container maxW="container.xl">
			<Center>
				<Heading as="h3">Penisula</Heading>
			</Center>
			<br />
			<Section delay={0.1}>
				<Heading
					as="h3"
					variant="section-title"
					sx={{ textTransform: 'uppercase' }}
				>
					​Hotspring Penisula (13/06)
				</Heading>
				<Center>
					<Table />
				</Center>
			</Section>
		</Container>
	)
}

export default Penisula
