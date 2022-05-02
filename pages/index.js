import Head from "next/head";

import NextLink from "next/link";
import {
	Link,
	Container,
	Heading,
	Box,
	Image,
	Button,
	List,
	Icon,
	useColorModeValue,
	Center,
	SimpleGrid,
} from "@chakra-ui/react";

import Layout from "components/layouts/article";

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

			{/* <main>
				<h1>Welcome to GK Liquidwraps</h1>
			</main> */}

			<Layout>
				<Container maxW="container.xl">
					<Box
						borderRadius="lg"
						bg={useColorModeValue("#88ccca", "red")}
						p={3}
						my={6}
						textAlign="center"
					>
						<strong>The professional liquid wraps you can trust</strong>
					</Box>
				</Container>
			</Layout>
		</div>
	);
}
