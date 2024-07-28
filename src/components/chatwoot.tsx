import { useEffect } from "react";

import { EnvironmentProps } from "@/types/environment";
import { QueryProps } from "@/types/query";
import { hmac } from "@/utils/crypto";
import { getChatwootConfig } from "@/utils/getDynamicContent";
import { v4 as uuid } from "uuid";

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
			setUser: (identifier: string, user: { name: string; identifier_hash: string }) => void;
		};
		chatwootSDK: {
			run: (config: { websiteToken: string; baseUrl: string }) => void;
		};
	}
}

export const Chatwoot = ({ env, query }: { env: EnvironmentProps["env"]; query: QueryProps }) => {
	const { BASE_URL, WEBSITE_TOKEN, USER_IDENTITY } = getChatwootConfig({ env });

	function getOrCreateUserId() {
		let userId = localStorage.getItem("userId");
		if (!userId) {
			userId = uuid();
			localStorage.setItem("userId", userId!);
		}
		return userId;
	}

	function getUserInfo() {
		const userId = getOrCreateUserId();
		return {
			identifier: userId,
			name: query?.clientFullName || "Sem identificação",
		};
	}

	useEffect(() => {
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
			const { identifier, name } = getUserInfo();
			const identifier_hash = hmac(identifier, USER_IDENTITY);

			window.$chatwoot.setUser(identifier, {
				name,
				identifier_hash,
			});
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
