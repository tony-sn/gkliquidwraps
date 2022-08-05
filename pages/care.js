import { Container, Heading, Center } from '@chakra-ui/react'

import Section from 'components/section'
import Paragraph from 'components/paragraph'

const Care = () => (
	<Container maxW="container.xl" className="care-maintenance">
		<Center>
			<Heading as="h3" fontSize={20} mb={6}>
				Liquid Spray Wrap Maintenance &amp; Care
			</Heading>
		</Center>

		<Section delay={0.1}>
			<Heading
				as="h3"
				variant="section-title"
				sx={{ textTransform: 'uppercase' }}
			>
				​Liquid Spray Wrap Aftercare
			</Heading>
			<Paragraph>
				Liquid wrap or spray-on wrap is very low maintenance investment and
				there is no need to use expensive products to improve durability. If you
				wish, you can apply some products to add extra protection keeping it in
				top conditions. Our product range has been tested for years and they are
				the ones we suggest.
			</Paragraph>
			<br />
			<Paragraph>
				However is important to pay a little attention to keep your new peelable
				paintwork in top conditions. After your car has been wrapped with liquid
				wrap, allow at least 1 week before you use a high pressure sprayer.
				Within this time you can still wash it like you normally do with a soft
				mitt and use high pressure but try to stay at least 30 cm away.
			</Paragraph>
			<br />
			<Paragraph>
				Bird drops and fuel spills should be rinsed as soon as possible to avoid
				stains. The car will need to be kept clean and dust free. A weekly wash
				or whenever it gets dirty, it&apos;s fine.
			</Paragraph>
			<br />
			<br />

			<strong>To sum up:</strong>
			<ul>
				<li>
					Keep it clean, wash weekly or whenever gets dirty and whenever
					possible apply the dip protective coat to add protection after you
					wash it. The protective dip coat is not needed but will offer extra
					scratch resistance and will make the future cleaning process easier
					and extend the life of the wrap considerably.
				</li>
				<li>
					Pay attention to door handles when opening the car, side skirts and
					anywhere that your hands and feet commonly come in contact with as
					friction is being created. Remember, this is peelable paint and is
					made to be peeled off after few friction strikes.
				</li>
			</ul>
		</Section>
	</Container>
)

export default Care
