import { ChakraProvider } from '@chakra-ui/react'

import Layout from 'components/layouts/main'
import Fonts from 'components/fonts'
import theme from 'theme'
import 'styles/embla.css'
import 'styles/myEmbla.css'
import 'styles/globals.css'

function MyApp({ Component, pageProps, router }) {
	return (
		<ChakraProvider theme={theme} resetCSS>
			<Layout router={router}>
				<Fonts />
				<Component {...pageProps} />
			</Layout>
		</ChakraProvider>
	)
}

export default MyApp
