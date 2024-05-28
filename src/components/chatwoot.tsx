import { useEffect } from "react";

declare global {
	interface Window {
		chatwootSettings: {
			hideMessageBubble: boolean;
			position: string;
			locale: string;
			type: string;
			darkMode?: string;
		};
		$chatwoot: {
			toggle: (action: string) => void;
		};
		chatwootSDK: {
			run: (config: { websiteToken: string; baseUrl: string }) => void;
		};
	}
}

export const Chatwoot = () => {
	useEffect(() => {
		window.chatwootSettings = {
			hideMessageBubble: true,
			position: "right",
			locale: "pt",
			type: "standard",
		};

		(function (d, t) {
			const BASE_URL = process.env.NEXT_PUBLIC_CHATWOOT_BASE_URL_WIZ!;
			const g = d.createElement(t) as HTMLScriptElement,
				s = d.getElementsByTagName(t)[0] as HTMLScriptElement;
			g.src = BASE_URL + "/packs/js/sdk.js";
			g.defer = true;
			g.async = true;
			s.parentNode?.insertBefore(g, s);
			g.onload = function () {
				window.chatwootSDK.run({
					websiteToken: process.env.NEXT_PUBLIC_CHATWOOT_WEBSITE_TOKEN_WIZ!,
					baseUrl: BASE_URL,
				});
			};
		})(document, "script");
	}, []);

	useEffect(() => {
		function handleChatwootReady() {
			window.$chatwoot.toggle("open");
		}

		function handleChatwootMessage(e: any) {
			console.log("on-message", e.detail);
		}

		window.addEventListener("chatwoot:ready", handleChatwootReady);
		window.addEventListener("chatwoot:on-message", handleChatwootMessage);

		return () => {
			window.removeEventListener("chatwoot:ready", handleChatwootReady);
			window.removeEventListener("chatwoot:on-message", handleChatwootMessage);
		};
	}, []);

	return null;
};
