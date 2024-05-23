import { defaultTheme } from "@/themes";
import { createTheme } from "@mui/material";
import { darken } from "polished";

import { buttonVariants } from "../buttonsVariants";

export const paletteColors = {
	primary: "#7F2566",
	secondary: "#FF8200",
	terciary: "#F2B300",
	background: "#F6EFE6",
	black: "#152332",
	neutral: "#F8EFE8",
	gray: "#868686",
	red: "#f44336",
	success: "#4caf50",
};

export const wizTheme = createTheme(defaultTheme, {
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
		background: {
			main: paletteColors.background,
			secondary: paletteColors.background,
		},
		black: {
			main: paletteColors.black,
		},
		neutral: {
			main: paletteColors.neutral,
		},
		gray: {
			main: paletteColors.gray,
			secondary: "#B9BFC7",
		},
		red: {
			main: paletteColors.red,
		},
		success: {
			main: paletteColors.success,
		},
		contrastBox: {
			main: "#F8F7F5",
			secondary: "#FFF",
			overLight: "#F6EFE6",
			chart: "#eae1d8",
		},
		table: {
			evenLine: "#F8F7F5",
		},
		title: {
			kpis: paletteColors.primary,
		},
		report: {
			text: paletteColors.primary,
			table: {
				primary: paletteColors.primary,
				secondary: paletteColors.primary,
				terciary: "#ECDDCF",
			},
			circleLine: paletteColors.secondary,
			line: paletteColors.primary,
		},
	},

	logo: {
		width: 160,
		height: 52,
	},

	components: {
		MuiOutlinedInput: {
			styleOverrides: {
				root: {
					"& fieldset": {
						borderColor: "#B9BFC7",
					},

					"&:hover fieldset": {
						borderColor: "red",
					},

					"&.Mui-focused fieldset": {
						borderColor: "red",
					},
					"input.Mui-disabled": {
						color: paletteColors.secondary,
					},

					"&.Mui-disabled": {
						backgroundColor: "#B9BFC7",
					},

					backgroundColor: "#FFF",
					borderRadius: "6px",
				},
			},
		},

		MuiInputBase: {
			styleOverrides: {
				root: {
					".MuiOutlinedInput-input": {
						color: "#868686",

						"&::placeholder": {
							color: "#000",
						},
					},

					fontSize: 16,

					"&.Mui-disabled": {
						color: paletteColors.secondary,
					},

					input: {
						color: paletteColors.secondary,
					},

					"&.Mui-focused": {
						input: {
							color: "#868686",
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
					"&.Mui-completed .MuiTypography-root.MuiTypography-caption": {
						color: paletteColors.secondary,
					},
				},
			},
		},
		MuiDialogTitle: {
			styleOverrides: {
				root: {
					backgroundColor: paletteColors.primary,
					color: "white",
					fontWeight: 400,
					fontSize: 25,
					textAlign: "center",
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
						fontSize: 25,
						color: paletteColors.primary,
					},
				},
				paper: {
					border: `1px solid ${paletteColors.primary}`,

					"& .MuiAutocomplete-option": {
						fontSize: "1rem",
					},
				},
				inputRoot: {
					fontSize: 16,
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

const wizConfig = {
	theme: wizTheme,
	title: "Wiz Mais Você",
	favicon: "wiz",
	ansNumber: "41.804-8",
	description: "Wiz Benefícios Varejo Soluções e Corretagem de Seguros S.A",
	register: "46.597.249/0001-27",
	terms: "https://wizmaisvoce.com.br/politica-de-privacidade",
	logo: {
		slug: "wiz-white",
		alt: "Wiz Mais Você",
		format: "svg",
	},
	background: {
		slug: "wiz",
		alt: "Wiz Mais Você",
		format: "png",
	},
	social: [
		{
			format: "svg",
			slug: "facebook",
			href: "https://www.facebook.com/wizmaisvoce",
			alt: "Facebook",
		},
		{
			format: "svg",
			slug: "instagram",
			href: "https://www.instagram.com/wizmaisvoce/",
			alt: "Instagram",
		},
		{
			format: "svg",
			slug: "linkedin",
			href: "https://www.linkedin.com/company/mais-voc%C3%AA",
			alt: "Linkedin",
		},
	],
};

export default wizConfig;
