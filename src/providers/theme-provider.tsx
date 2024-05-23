import { ReactNode, useMemo } from "react";

import { getWhiteLabel } from "@/config";
import { useEnvironment } from "@/store/useEnvironment";
import { EnvironmentProps } from "@/types/environment";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import Head from "next/head";

export const ThemeProvider = ({
	children,
	...pageProps
}: {
	children: ReactNode;
	env: EnvironmentProps["env"];
	ambient: EnvironmentProps["ambient"];
}) => {
	const { env, ambient } = pageProps;
	const setEnvironment = useEnvironment(store => store.setEnvironment);

	useMemo(() => {
		setEnvironment({ env, ambient });
	}, [pageProps, setEnvironment]);

	const { theme, title, favicon } = useMemo(() => {
		const whiteLabel = getWhiteLabel(env || "wiz");

		const theme = whiteLabel?.theme;
		const title = whiteLabel?.title;
		const favicon = whiteLabel?.favicon;

		return {
			theme,
			title,
			favicon,
		};
	}, []);

	return (
		<MuiThemeProvider theme={theme}>
			<Head>
				<title>{title}</title>
				<link rel="icon" href={`/icons/${favicon}.png`} />
			</Head>
			{children}
		</MuiThemeProvider>
	);
};
