import { defaultTheme } from "@/themes";
import { createTheme } from "@mui/material";
import { darken } from "polished";

import { buttonVariants } from "../buttonsVariants";

export const paletteColors = {
	primary: "#00DAFA",
	secondary: "#00B3E3",
	terciary: "#00DAFA",
	black: "#50555A",
	neutral: "#808080",
	background: "#CECECE",
	gray: "#868686",
	red: "#f44336",
	success: "#4caf50",
};

export const positivaTheme = createTheme(defaultTheme, {
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
			secondary: "#EAEAEA",
			overLight: "#F8F7F5",
			chart: "#E5E5E5",
		},

		gradient: {
			main: {
				start: "#00B3E3",
				end: "#00B3E3",
			},

			highlight: {
				start: "#00DBFA",
				end: "#00CDF7",
			},

			accent: {
				start: "#00D7FD",
				end: "#00BCF9",
			},
		},
	},

	logo: {
		width: 130,
		height: 50,
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
					color: paletteColors.secondary,
					fontSize: "0.875rem",
					"&.Mui-focused": {
						color: paletteColors.secondary,
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

const positivaConfig = {
	theme: positivaTheme,
	title: "Positiva",
	favicon: "positiva",
	description: "Positiva Administradora de Benefícios LTDA",
	ansNumber: "42.028-0",
	register: "28.929.873/0001-00",
	terms: "https://positiva.com.br/politica-de-privacidade",
	logo: {
		slug: "positiva-white",
		alt: "Positiva",
		format: "svg",
	},
	background: {
		slug: "positiva",
		alt: "Positiva",
		format: "png",
	},
	social: [
		{
			format: "svg",
			slug: "facebook",
			href: "https://www.facebook.com/positivaadministradora/",
			alt: "Facebook",
		},
		{
			format: "svg",
			slug: "instagram",
			href: "https://www.instagram.com/positivasaude/",
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

export default positivaConfig;
