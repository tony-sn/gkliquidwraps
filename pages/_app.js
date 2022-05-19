import { ChakraProvider } from "@chakra-ui/react";

import Layout from "components/layouts/main";
import Fonts from "components/fonts";
import theme from "theme";
import "styles/embla.css";

function MyApp({ Component, pageProps, router }) {
	return (
		<ChakraProvider theme={theme}>
			<Layout router={router}>
				<Fonts />
				<Component {...pageProps} />
			</Layout>
		</ChakraProvider>
	);
}

export default MyApp;
