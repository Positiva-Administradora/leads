import { Palette as MuiPallete } from "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
	interface Palette extends MuiPallete {
		terciary: {
			main: string;
		};

		contrastBox: {
			main: string;
			secondary: string;
			overLight: string;
			chart: string;
		};

		gradient: {
			main: {
				start: string;
				end: string;
			};

			highlight: {
				start: string;
				end: string;
			};

			accent: {
				start: string;
				end: string;
			};
		};
	}
}
