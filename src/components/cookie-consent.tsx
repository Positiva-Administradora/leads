import CookiePopup from "react-cookie-consent";

import { inter } from "@/config/fonts";
import { useTheme } from "@mui/material";

export const CookieConsent = () => {
	const theme = useTheme();

	return (
		<CookiePopup
			buttonText="Entendi"
			style={{ backgroundColor: theme.palette.secondary.main }}
			cookieName="cookieConsent"
			buttonStyle={{
				backgroundColor: theme.palette.primary.main,
				color: "#FFF",
				fontSize: "1rem",
				borderRadius: "40px",
				paddingInline: "48px",
				fontFamily: inter.style.fontFamily,
			}}
		>
			Este site utiliza cookies para gerar dados estatísticos e melhorar a experiência do usuário.
		</CookiePopup>
	);
};
