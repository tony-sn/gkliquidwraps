import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
	font-weight: bold;
	font-size: 1rem;
	display: inline-flex;
	align-items: center;
	height: 40px;
	line-height: 20px;
	padding: 10px;

	img {
		transition: 200ms ease;
	}
`

const Logo = () => {
	return (
		<Link href="/">
			<button type="button">
				<LogoBox>
					<Text
						color={useColorModeValue('gray.800', 'whiteAlpha.900')}
						fontFamily="'M PLUS Rounded 1c', sans-serif"
						fontWeight="bold"
						ml={3}
					>
						<span
							style={{
								textTransform: 'uppercase',
								color: `${useColorModeValue('#e55113', '#e53e3e')}`,
							}}
						>
							GK Liquid Wraps
						</span>
					</Text>
				</LogoBox>
			</button>
		</Link>
	)
}

export default Logo
