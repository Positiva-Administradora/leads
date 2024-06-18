import { defaultTheme } from "@/themes";
import { createTheme } from "@mui/material";
import { darken } from "polished";

import { buttonVariants } from "../buttonsVariants";

export const paletteColors = {
	primary: "#A740D7",
	secondary: "#484848",
	terciary: "#484848",
	background: "#F5F5F5",
	black: "#4F4F4F",
	neutral: "#F5F5F5",
	gray: "#868686",
	red: "#f44336",
	success: "#4caf50",
};

export const meProtegeTheme = createTheme(defaultTheme, {
	palette: {
		primary: {
			main: paletteColors.primary,
		},
		secondary: {
			main: paletteColors.secondary,
		},
		terciary: {
			main: paletteColors.terciary,
		},
		contrastBox: {
			main: "#FFF",
			secondary: "#E4E4E4",
			overLight: "#E4E4E4",
			chart: "#eae1d8",
		},

		gradient: {
			main: {
				start: "#484848",
				end: "#484848",
			},

			highlight: {
				start: "#484848",
				end: "#000000",
			},

			accent: {
				start: "#AE52D9",
				end: "#2D1438",
			},
		},
	},

	logo: {
		width: 145,
		height: 90,
	},

	components: {
		MuiOutlinedInput: {
			styleOverrides: {
				root: {
					"& fieldset": {
						borderColor: paletteColors.primary,
					},

					"&:hover fieldset": {
						borderColor: paletteColors.secondary,
					},

					"&.Mui-focused fieldset": {
						borderColor: paletteColors.primary,
					},

					"input.Mui-disabled": {
						WebkitTextFillColor: paletteColors.secondary,
						color: paletteColors.secondary,
						backgroundColor: "#EEE",
					},
				},
			},
		},

		MuiInputBase: {
			styleOverrides: {
				root: {
					".MuiOutlinedInput-input": {
						WebkitTextFillColor: paletteColors.secondary,
						color: paletteColors.secondary,
					},
					fontSize: "0.875rem",

					"&.Mui-disabled": {
						WebkitTextFillColor: paletteColors.secondary,
						color: paletteColors.secondary,
						backgroundColor: "#EEE",
					},

					input: {
						color: paletteColors.secondary,
					},

					"&.Mui-focused": {
						input: {
							color: paletteColors.secondary,
						},
					},
				},
			},
		},

		MuiInputLabel: {
			styleOverrides: {
				root: {
					color: paletteColors.primary,
					fontSize: "0.875rem",
					"&.Mui-focused": {
						color: paletteColors.primary,
					},

					"&.Mui-disabled": {
						color: paletteColors.primary,
						fontWeight: "bold",
					},
				},
			},
		},

		MuiListItemButton: {
			styleOverrides: {
				root: {
					"&:hover": {
						background: `linear-gradient(to right, ${darken(
							0.05,
							paletteColors.primary,
						)} 0%, transparent 100%) 0% 0% no-repeat !important`,

						".MuiListItemIcon-root .MuiSvgIcon-root": {
							color: paletteColors.secondary,
						},

						".MuiListItemText-primary": {
							fontWeight: "bold",
						},
					},

					".MuiListItemText-primary": {
						color: "white !important",
						fontSize: "0.875rem",
					},

					"&.Mui-selected": {
						background: darken(0.04, paletteColors.primary),

						".MuiListItemText-primary": {
							color: paletteColors.primary,
							fontWeight: "bold",
						},
						".MuiSvgIcon-root": {
							color: paletteColors.secondary,
						},
					},
				},
			},
		},

		MuiButton: {
			styleOverrides: {
				containedPrimary: {
					"&:hover": {
						backgroundColor: darken(0.05, paletteColors.primary),
					},
				},
				containedSecondary: {
					"&:hover": {
						backgroundColor: darken(0.05, paletteColors.secondary),
					},
				},
				containedGray: {
					color: "#FFF",

					"&:hover": {
						backgroundColor: darken(0.05, paletteColors.gray),
					},
				},

				textPrimary: {
					"&:hover": {
						textDecoration: "underline",
						backgroundColor: "transparent",
					},
				},
				textSecondary: {
					"&:hover": {
						textDecoration: "underline",
						backgroundColor: "transparent",
					},
				},
				textGray: {
					"&:hover": {
						textDecoration: "underline",
						backgroundColor: "transparent",
					},
				},
			},

			variants: buttonVariants,
		},

		MuiTab: {
			styleOverrides: {
				root: {
					color: paletteColors.primary,
				},
			},
		},

		MuiStep: {
			styleOverrides: {
				root: {
					"& .MuiTypography-root.MuiTypography-caption": {
						color: "#000000DE",
					},
					"&.Mui-completed .MuiTypography-root.MuiTypography-caption": {
						color: paletteColors.secondary,
					},
				},
			},
		},

		MuiAutocomplete: {
			styleOverrides: {
				noOptions: {
					fontSize: "0.875rem",
				},

				root: {
					"& .MuiSvgIcon-root": {
						color: paletteColors.secondary,
					},
				},
				paper: {
					border: `1px solid ${paletteColors.primary}`,

					"& .MuiAutocomplete-option": {
						fontSize: "0.875rem",
						"&:hover": {
							backgroundColor: "#E3E4E5",
						},
					},
				},
			},
		},

		MuiFormHelperText: {
			styleOverrides: {
				root: {
					color: paletteColors.red,
					marginLeft: 0,
				},
			},
		},
	},
});

const meProtegeConfig = {
	theme: meProtegeTheme,
	title: "Me Protege",
	favicon: "meprotege",
	ansNumber: "41.804-8",
	description: "Me Protege Franquia e Corretora de Seguros LTDA",
	register: "25.006.061/0001-97",
	terms: "https://meprotege.com.br/",

	defaultContent: {
		channelId: 3,
		brokerId: 1,
		backgroundId: 3,
	},

	logo: {
		slug: "meprotege-white",
		alt: "Me Protege",
		format: "png",
	},

	background: {
		slug: "meprotege",
		alt: "Me Protege",
		format: "png",
	},

	social: [
		{
			format: "svg",
			slug: "facebook",
			href: "https://www.facebook.com/meprotegeoficial/",
			alt: "Facebook",
		},
		{
			format: "svg",
			slug: "instagram",
			href: "https://www.linkedin.com/company/me-protege/?trk=ppro_cprof&originalSubdomain=br",
			alt: "Instagram",
		},
		{
			format: "svg",
			slug: "linkedin",
			href: "https://www.linkedin.com/company/positiva-administradora-de-benef%C3%ADcios/about/",
			alt: "Linkedin",
		},
	],
};

export default meProtegeConfig;
