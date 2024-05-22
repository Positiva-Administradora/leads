import { EnvironmentProps } from "@/types/environment";
import { Box } from "@mui/material";

import { CookieConsent } from "./cookie-consent";
import { Footer } from "./footer";

interface LayoutProps {
	children: React.ReactNode;
	env: EnvironmentProps["env"];
	ambient: EnvironmentProps["ambient"];
}

export const Layout = ({ children, ...pageProps }: LayoutProps) => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				height: "100vh",
			}}
		>
			<CookieConsent />
			{children}
			<Footer {...pageProps} />
		</Box>
	);
};
