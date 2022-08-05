import {
	Container,
	Heading,
	Center,
	FormControl,
	FormLabel,
	Input,
	Textarea,
	SimpleGrid,
	Box,
	Img,
	Button,
	Link,
} from '@chakra-ui/react'

import Section from 'components/section'
import image from '../public/images/googleMap.png'

const Contact = () => {
	return (
		<Container maxW="container.xl">
			<Center>
				<Heading as="h3">Contact Us</Heading>
			</Center>
			<br />
			<Section delay={0.1}>
				<SimpleGrid columns={[null, 2, 2]} gap={6}>
					<FormControl>
						<FormLabel htmlFor="first-name">Your Name</FormLabel>
						<Input id="first-name" placeholder="First name" isRequired />
						<FormLabel />
						<Input id="last-name" placeholder="Last name" isRequired />
						<FormLabel htmlFor="mobile-number">Mobile Number</FormLabel>
						<Input id="mobile-number" placeholder="+61" isRequired />
						<FormLabel htmlFor="business-name">Business Name</FormLabel>
						<Input id="business-name" placeholder="Company Pty Ltd" />
						<FormLabel htmlFor="city">Suburb / City</FormLabel>
						<Input id="city" placeholder="Melbourne" isRequired />
						<FormLabel htmlFor="email">Email</FormLabel>
						<Input id="email" placeholder="johndoe@gmail.com" isRequired />
						<FormLabel htmlFor="comment">Comment</FormLabel>
						<Textarea h="100px" w="100%" variant="filled" />
						<Box>
							<Link href="mailto: kiennguyenpro1304@gmail.com" target="_blank">
								<Button variant="ghost" colorScheme="purple" align="center">
									Submit
								</Button>
							</Link>
						</Box>
					</FormControl>
					<Container>
						<Box>
							<Heading as="h3">GK Liquidwraps™</Heading>
							<br />
							<strong>HEAD OFFICE</strong>
							<p>55B Oakwood Rd, Albanvale, VIC 3021</p>
							<br />

							<div style={{ color: '#ff6666' }}>
								Sometimes quotes cannot be given by phone calls.
								<br />
								<br />
								You can text with a picture of you car and the colour you want
								and we will get back with a locked quote.
								<br />
								<br />
								Alternatively you can contact us and we will get back to you
								soon.
								<p style={{ marginTop: '1rem' }}>
									<strong>
										Email: &nbsp;
										<a href="mailto:gkliquidwraps@gmail.com">
											gkliquidwraps@gmail.com
										</a>
									</strong>
								</p>
								<p>
									<strong>
										Phone: &nbsp;
										<a href="tel:+61410141866">0410141866</a>
									</strong>
								</p>
							</div>
						</Box>
					</Container>
				</SimpleGrid>
				<Section delay={0.3}>
					<Img mt={10} src={image.src} />
				</Section>
			</Section>
		</Container>
	)
}

export default Contact
