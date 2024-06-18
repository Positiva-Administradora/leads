import { useEffect } from "react";

import { EnvironmentProps } from "@/types/environment";
import { getChatwootConfig } from "@/utils/getDynamicContent";

declare global {
	interface Window {
		chatwootSettings: {
			hideMessageBubble?: boolean;
			position?: string;
			locale?: string;
			type?: string;
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

export const Chatwoot = ({ env }: { env: EnvironmentProps["env"] }) => {
	useEffect(() => {
		const { BASE_URL, WEBSITE_TOKEN } = getChatwootConfig({ env });

		window.chatwootSettings = {
			hideMessageBubble: true,
			locale: "pt",
		};

		(function (d, t) {
			const g = d.createElement(t) as HTMLScriptElement,
				s = d.getElementsByTagName(t)[0] as HTMLScriptElement;
			g.src = BASE_URL + "/packs/js/sdk.js";
			g.defer = true;
			g.async = true;
			s.parentNode?.insertBefore(g, s);
			g.onload = function () {
				window.chatwootSDK.run({
					websiteToken: WEBSITE_TOKEN,
					baseUrl: BASE_URL,
				});

				const chatwootWidget = document.querySelector("#cw-widget-holder");
				const chatwootIframe = document.querySelector("#chatwoot_live_chat_widget");

				if (chatwootWidget && chatwootIframe) {
					const customChatContainer = document.getElementById("custom-chat-container");
					chatwootIframe.setAttribute("frameborder", "0");

					if (customChatContainer) {
						customChatContainer.appendChild(chatwootIframe);
						chatwootWidget.remove();
					}
				}
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
