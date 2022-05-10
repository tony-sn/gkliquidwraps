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
import styles from "styles/global.module.css";

export default function Home() {
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
				<Img
					src={`images/${useColorModeValue("baggedEuroCl9", "Lambo")}.jpg`}
					w="100vw"
					className={styles.banner}
				/>
				<Container maxW="container.xl">
					<h2 className={styles.slogan}>
						The professional liquid wraps you can trust
					</h2>

					<Section>
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
				</Container>
			</Layout>
		</div>
	);
}
