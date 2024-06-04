import { Toaster } from "react-hot-toast";

import { Layout } from "@/components/layout";
import { ThemeProvider } from "@/providers/theme-provider";
import { CssBaseline } from "@mui/material";
import type { AppProps } from "next/app";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider {...pageProps}>
			<CssBaseline />

			<Layout {...pageProps}>
				<Component {...pageProps} />
			</Layout>
			<Toaster />
		</ThemeProvider>
	);
}
