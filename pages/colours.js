import { Container, Heading, Center, SimpleGrid } from '@chakra-ui/react'

import Section from 'components/section'
import Paragraph from 'components/paragraph'
import { GalleryGridItem } from 'components/gridItem'
import { colours } from '../public/images'

const Colours = () => {
	return (
		<>
			<Container maxW="container.xl">
				<Center>
					<Heading as="h3">Liquid Spray Wrap Colours</Heading>
				</Center>
			</Container>
			<br />
			<Section delay={0.1}>
				<Heading
					as="h3"
					variant="section-title"
					sx={{ textTransform: 'uppercase' }}
				>
					All colours are available
				</Heading>
				<Paragraph>
					You just need to pick the one you like and let us know. If you wish a
					unique colour for your car, then we can do this for you but we need to
					see the one you want. You need to pick one or bring in a colour card
					you like. We will match it, compare with your sample and if you are
					satisfied with the sample we will dip your car with that colour.
					Please remember liquid wrap colours, will slightly change depending on
					the outside lighting. Most popular and standards colours are shown
					below.
				</Paragraph>
				<Center>
					<Heading
						sx={{
							textTransform: 'uppercase',
							fontSize: '1.5rem',
							color: 'red.500',
						}}
						my={{ base: 3, md: 6 }}
					>
						Matte and Satin finish
					</Heading>
				</Center>
				<SimpleGrid columns={[1, 2, 3]} gap={3}>
					{colours.map((colour, index) => (
						<GalleryGridItem
							key={index}
							thumbnail={colour}
							style={{ width: '400px', height: '243px' }}
						/>
					))}
				</SimpleGrid>
			</Section>
		</>
	)
}

export default Colours
