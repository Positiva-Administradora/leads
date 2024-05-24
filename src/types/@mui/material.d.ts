import { Palette as MuiPallete } from "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
	interface Palette extends MuiPallete {
		terciary: {
			main: string;
		};

		background: {
			main: string;
			secondary: string;
		};
		black: {
			main: string;
		};
		neutral: {
			main: string;
		};
		gray: {
			main: string;
			secondary: string;
		};
		red: {
			main: string;
		};
		success: {
			main: string;
		};
		contrastBox: {
			main: string;
			secondary: string;
			overLight: string;
			chart: string;
		};
		table: {
			evenLine: string;
		};
		title: {
			kpis: string;
		};
		report: {
			text: string;
			table: {
				primary: string;
				secondary: string;
				terciary: string;
			};
			circleLine: string;
			line: string;
		};
	}
}
