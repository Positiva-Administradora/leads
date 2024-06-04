import { ReactNode, useMemo } from "react";

import { getWhiteLabel } from "@/config";
import { useEnvironment } from "@/store/useEnvironment";
import { EnvironmentProps } from "@/types/environment";
import { Global, css } from "@emotion/react";
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
			<Global
				styles={css`
					body::-webkit-scrollbar {
						scrollbar-gutter: stable;
						width: 7px;
					}

					body::-webkit-scrollbar-track {
						background: #fff;
					}

					body::-webkit-scrollbar-thumb {
						background: ${theme.palette.primary.main};
					}

					body::-webkit-scrollbar-thumb:hover {
						background: ${theme.palette.secondary.main};
					}
				`}
			/>
			<Head>
				<title>{title}</title>
				<link rel="icon" href={`/icons/${favicon}.png`} />
			</Head>

			{children}
		</MuiThemeProvider>
	);
};
