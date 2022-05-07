import Link from "next/link";
import Image from "next/image";
import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";

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

	&:hover img {
		transform: rotate(20deg);
	}

	&:hover p {
		color: #e53e3e;
	}
`;

const Logo = () => {
	return (
		<Link href="/">
			<a>
				<LogoBox>
					<Text
						color={useColorModeValue("gray.800", "whiteAlpha.900")}
						fontFamily="'M PLUS Rounded 1c', sans-serif"
						fontWeight="bold"
						ml={3}
					>
						<span style={{ textTransform: "uppercase" }}>GK Liquid Wraps</span>
					</Text>
				</LogoBox>
			</a>
		</Link>
	);
};

export default Logo;
