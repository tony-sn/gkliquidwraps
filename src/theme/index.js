import {
	extendTheme,
	theme as base,
	withDefaultColorScheme,
	withDefaultVariant,
} from "@chakra-ui/react";

import { mode } from "@chakra-ui/theme-tools";

const inputSelectStyles = {
	variants: {
		filled: {
			field: {
				_focus: {
					borderColor: "brand.500",
				},
			},
		},
	},
	sizes: {
		md: {
			field: {
				borderRadius: "none",
			},
		},
	},
};

const brandRing = {
	_focus: {
		ring: 2,
		ringColor: "brand.500",
	},
};

const config = {
	initialColorMode: "light",
	useSystemColorMode: false,
};

const styles = {
	global: (props) => ({
		body: {
			bg: mode("#f0e7db", "#202023")(props),
		},
	}),
};

const colors = {
	glassTeal: "#88ccca",
};

const theme = extendTheme(
	{
		colors,
		styles,
		config,
		colors: {
			brand: {
				50: "#f5fee5",
				100: "#e1fbb2",
				200: "#cdf781",
				300: "#b9ee56",
				400: "#a2e032",
				500: "#8ac919",
				600: "#71ab09",
				700: "#578602",
				800: "#3c5e00",
				900: "#203300",
			},
		},
		fonts: {
			heading: `'M PLUS Rounded 1c', Montserrat, ${base.fonts?.heading}`,
			body: `'M PLUS Rounded 1c', Inter ${base.fonts?.body}`,
		},
		components: {
			Button: {
				variants: {
					primary: (props) => ({
						rounded: "none",
						...brandRing,
						color: mode("white", "gray.800")(props),
						backgroundColor: mode("brand.500", "brand.200")(props),

						_hover: {
							backgroundColor: mode("brand.600", "brand.300")(props),
						},

						_active: {
							backgroundColor: mode("brand.700", "brand.400")(props),
						},
					}),
				},
			},
			Input: { ...inputSelectStyles },
			Select: { ...inputSelectStyles },
			Checkbox: {
				baseStyle: {
					control: {
						borderRadius: "none",
						...brandRing,
					},
				},
			},
			Heading: {
				variants: {
					"section-title": {
						textDecoration: "underline",
						fontSize: 20,
						textUnderlineOffset: 6,
						textDecorationColor: "#525252",
						textDecorationThickness: 4,
						marginTop: 3,
						marginBottom: 4,
					},
				},
			},
			Link: {
				baseStyle: (props) => ({
					color: mode("#3d7aed", "#ff63c3")(props),
					textUnderlineOffset: 3,
				}),
			},
		},
	},
	withDefaultColorScheme({
		colorScheme: "brand",
		components: ["Checkbox"],
	}),
	withDefaultVariant({
		variant: "filled",
		components: ["Input", "Select"],
	})
);

export default theme;
