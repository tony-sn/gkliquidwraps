import Head from "next/head";

import NextLink from "next/link";
import {
	Link,
	Container,
	Heading,
	Box,
	Img,
	Button,
	List,
	Icon,
	useColorModeValue,
	Center,
	SimpleGrid,
	AspectRatio,
} from "@chakra-ui/react";

import About from "components/about";
import Section from "components/section";
import Layout from "components/layouts/article";
import EmblaCarousel from "components/carousel/EmblaCarousel";

import styles from "styles/global.module.css";

export default function Home() {
	const slides = [
		{ content: "WHY LIQUID SPRAY WRAP?" },
		{ content: "Our method is affordable & durable" },
		{ content: "Liquid wrap protects your car paint and make it last longer" },
		{
			content: "Liquid wrap will increase the resale value",
		},
		{
			content: "We can change the colour of your car within the same day",
		},
	];
	return (
		<div>
			<Head>
				<title>GK Liquidwraps</title>
				<meta
					name="description"
					content="A liquid wrap professional based in Melbourne"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Layout>
				<Container maxW="container.xl">
					<Img
						src={`images/${useColorModeValue("baggedEuroCl9", "Lambo")}.jpg`}
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
									"baggedEuroCl9front",
									"LamboFront"
								)}.jpg")`,
							}}
						>
							<EmblaCarousel slides={slides} />
						</div>
					</Section>
				</Container>
			</Layout>
		</div>
	);
}
