import Head from "next/head";
import { Box, Container, Img, useColorModeValue } from "@chakra-ui/react";

import Navbar from "../navbar";

const Main = ({ children, router }) => {
	return (
		<Box as="main" pb={"8"}>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta
					name="description"
					content="A liquid wrap professional based in Melbourne"
				/>
				<meta name="author" content="Tony Nguyen" />
				<meta name="author" content="gkliquidwraps" />
				<link rel="apple-touch-icon" href="apple-touch-icon.png" />
				<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
				<link
					rel="icon"
					type="image/png"
					sizes="192x192"
					href="/android-icon-192x192.png"
				/>
				<meta property="og:site_name" content="GK Liquid Wraps Landing Page" />
				<meta property="og:type" content="website" />
				<title>GK Liquid Wraps</title>
			</Head>

			<Navbar path={router.asPath} />

			<Container maxW="container.xl" pt={14}>
				{children}

				{/* <Footer /> */}
			</Container>
		</Box>
	);
};

export default Main;
