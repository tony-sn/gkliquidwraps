import Head from 'next/head'

import NextLink from 'next/link'
import {
	Box,
	Button,
	Center,
	Container,
	Heading,
	Img,
	SimpleGrid,
	Stack,
	useColorModeValue,
} from '@chakra-ui/react'

import { ChevronRightIcon } from '@chakra-ui/icons'

import MySvg from 'components/svg'

import About from 'components/about'
import Section from 'components/section'
import Layout from 'components/layouts/article'
import EmblaCarousel from 'components/carousel/EmblaCarousel'

import styles from 'styles/global.module.css'

export default function Home() {
	const slides = [
		{ content: 'WHY LIQUID SPRAY WRAP?' },
		{ content: 'Our method is affordable & durable' },
		{ content: 'Liquid wrap protects your car paint and make it last longer' },
		{
			content: 'Liquid wrap will increase the resale value',
		},
		{
			content: 'We can change the colour of your car within the same day',
		},
	]
	return (
		<div>
			<Head>
				<title>GK Liquidwraps™</title>
				<meta
					name="description"
					content="A liquid wrap professional based in Melbourne"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Layout>
				<Container maxW="container.xl">
					<Img
						src={`images/${useColorModeValue('baggedEuroCl9', 'Lambo')}.jpg`}
						w="100%"
						className={styles.banner}
					/>
					<h2 className={styles.slogan}>
						The professional liquid wraps you can trust
					</h2>

					<Section delay={0.1}>
						<Heading as="h3" variant="section-title">
							Automotive Liquid Spray Wraps from $650
						</Heading>

						<p>
							GK Liquidwraps™ specialises in the application of Liquid Vinyl
							Spray Wraps on vehicles since 2021.
						</p>

						<br />

						<div className={styles.paragraph} id="about">
							<About />​
						</div>
					</Section>

					<Section delay={0.2}>
						<div
							className={styles.services}
							style={{
								backgroundImage: `url("/images/${useColorModeValue(
									'baggedEuroCl9Front',
									'LamboFront',
								)}.jpg")`,
							}}
						>
							<EmblaCarousel slides={slides} />
						</div>
					</Section>

					<Section delay={0.3}>
						<Heading as="h1" textAlign="center" mb="5">
							Gallery
						</Heading>
						<Center>
							<SimpleGrid columns={[1, 1, 2]} gap={3}>
								<Img
									borderColor="whiteAlpha.800"
									borderWidth={2}
									borderStyle="none"
									maxWidth="full"
									display="inline-block"
									borderRadius="lg"
									src="/images/renault-matte-dark-gold-car-wrap-australia_orig.jpg"
									alt="renault matte dark gold"
									id="renaultmattedarkgold"
								/>
								<Img
									borderColor="whiteAlpha.800"
									borderWidth={2}
									borderStyle="none"
									maxWidth="full"
									display="inline-block"
									borderRadius="lg"
									src="/images/bmw-matte-gunmetal-grey-matte-car-wrap_orig.jpg"
									alt="bmw matte gunmetal grey"
									id="bmwmattegunmetalgrey"
								/>
								<Img
									borderColor="whiteAlpha.800"
									borderWidth={2}
									borderStyle="none"
									maxWidth="full"
									display="inline-block"
									borderRadius="lg"
									src="/images/nissan-matte-grey-car-wrap_orig.jpg"
									alt="nissan matte grey"
									id="nissanmattegrey"
								/>
								<Img
									borderColor="whiteAlpha.800"
									borderWidth={2}
									borderStyle="none"
									maxWidth="full"
									display="inline-block"
									borderRadius="lg"
									src="/images/bmw-matte-yellow-wrap_orig.jpg"
									alt="bmw matte yellow"
									id="bmwmatteyellow"
								/>
							</SimpleGrid>
						</Center>
						<Center>
							<Box align="justify" my={6} mx={2} mb={0}>
								<NextLink href="/gallery" passHref>
									<Button
										rightIcon={<ChevronRightIcon />}
										colorScheme={useColorModeValue('orange', 'red')}
									>
										View More
									</Button>
								</NextLink>
							</Box>
						</Center>
					</Section>

					<Section delay={0.4}>
						<Heading
							as="h1"
							textTransform="uppercase"
							textAlign="center"
							className="works-section-heading"
						>
							Our Process
						</Heading>

						<Stack
							direction={{ base: 'column', md: 'row' }}
							textAlign="center"
							flexGrow={1}
							className="works-section-stack"
						>
							{/* custom svg color */}
							<MySvg />
						</Stack>
					</Section>
				</Container>
			</Layout>
		</div>
	)
}
