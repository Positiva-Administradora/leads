import { inter } from "@/config/fonts";
import { createTheme } from "@mui/material/styles";
const theme = createTheme();

export const defaultTheme = createTheme(theme, {
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					[theme.breakpoints.up("lg")]: {
						fontSize: "1rem",
					},
					[theme.breakpoints.down("md")]: {
						fontSize: "0.75rem",
					},
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				root: {
					fontFamily: "inherit",
					fontSize: 16,
					fontWeight: 400,
					borderRadius: theme.spacing(5),
					textTransform: "none",
					width: "100%",
					boxShadow: "none",
				},
			},
		},
		MuiDialogActions: {
			styleOverrides: {
				root: {
					padding: "16px 24px",
				},
			},
		},

		MuiTablePagination: {
			styleOverrides: {
				spacer: {
					display: "none",
				},
				displayedRows: {
					marginLeft: "auto",
				},
			},
		},
		MuiFormControl: {
			styleOverrides: {
				root: {
					width: "100%",
				},
			},
		},
		MuiButtonBase: {
			styleOverrides: {
				root: {
					color: "#9CA5AE",
					fontSize: 20,
				},
			},
		},
		MuiFormControlLabel: {
			styleOverrides: {
				root: {
					color: "#50555A",
				},
			},
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					boxShadow: "0px 3px 26px #9090901F",
				},
			},
		},
		MuiTypography: {
			styleOverrides: {
				root: {
					fontFamily: "inherit",
				},
			},
			defaultProps: {
				fontFamily: inter.style.fontFamily,
			},
		},

		MuiInputBase: {
			styleOverrides: {
				root: {
					fontFamily: "inherit",
				},
			},
			defaultProps: {},
		},

		MuiFormLabel: {
			styleOverrides: {
				root: {
					fontFamily: "inherit",
				},
			},
			defaultProps: {},
		},

		MuiTableContainer: {
			styleOverrides: {
				root: {
					backgroundColor: "#fff",
					boxShadow: "0px 3px 26px #9090901F",
				},
			},
		},
		MuiTableHead: {
			styleOverrides: {
				root: {
					backgroundColor: "#fff",
				},
			},
		},
		MuiTableRow: {
			styleOverrides: {
				root: {
					"&:nth-of-type(odd)": {
						backgroundColor: "#F8FBFC",
					},
				},
				head: {
					backgroundColor: "#fff !important",
				},
			},
		},
		MuiTableCell: {
			styleOverrides: {
				footer: {
					width: "100%",
					backgroundColor: "#fff",
				},
				head: {
					fontSize: "0.875rem",
					fontWeight: "600",
				},
			},
		},
		MuiTab: {
			styleOverrides: {
				root: {
					"&:not(:first-of-type)": {
						marginLeft: "0.5rem",
					},
					textTransform: "none",
					fontSize: "1rem",
					background:
						"transparent linear-gradient(180deg, #F4F4F4 0%, #DBDBDB 100%) 0% 0% no-repeat padding-box;",
					"&.Mui-selected": {
						background: "#fff",
					},
				},
			},
		},
		MuiStepLabel: {
			styleOverrides: {
				iconContainer: {
					paddingRight: 0,
				},
			},
		},
	},
});
