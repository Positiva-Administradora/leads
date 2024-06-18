import { getWhiteLabel } from "@/config";
import { backgrounds, channels, indicators } from "@/data";
import { EnvironmentProps } from "@/types/environment";
import { QueryProps } from "@/types/query";

export function getChannel({
	env,
	channelId,
}: {
	env: EnvironmentProps["env"];
	channelId: QueryProps["channelId"];
}) {
	const { defaultContent } = getWhiteLabel(env);

	const formatChannelSrc = (slug: string) => `/channels/${slug}.png`;

	const findChannel = () => {
		return channels.find(c => {
			if (!channelId) {
				return defaultContent.channelId === c.id;
			}

			return channelId === c.id;
		})!;
	};

	const { slug, alt, supportText } = findChannel();

	return {
		src: formatChannelSrc(slug),
		alt,
		supportText,
	};
}

export function getBrooker({
	env,
	brokerId,
}: {
	env: EnvironmentProps["env"];
	brokerId: QueryProps["brokerId"];
}) {
	const { defaultContent } = getWhiteLabel(env);

	const formatSrc = (slug: string) => `/brokers/${slug}.png`;

	const findBrooker = () => {
		return channels.find(c => {
			if (!brokerId) {
				return defaultContent.brokerId === c.id;
			}

			return brokerId === c.id;
		})!;
	};

	const { slug, alt, supportText } = findBrooker();

	return {
		src: formatSrc(slug),
		alt,
		supportText,
	};
}

export function getIndicator({ indicatorId }: { indicatorId: QueryProps["indicatorId"] }) {
	const formatSrc = (id: number) => `/indicators/${id}.png`;

	const findIndicator = () => {
		return indicators.find(c => {
			if (!indicatorId) {
				return null;
			}

			return indicatorId === c.id;
		});
	};

	const indicator = findIndicator();

	if (!indicator) {
		return null;
	}

	return {
		...indicator,
		src: formatSrc(indicator.id),
	};
}

export function getBackground({
	env,
	backgroundId,
}: {
	env: EnvironmentProps["env"];
	backgroundId: QueryProps["backgroundId"];
}) {
	const { defaultContent } = getWhiteLabel(env);

	const formatSrc = (slug: string) => `/backgrounds/${slug}.png`;

	const findBackground = () => {
		return backgrounds.find(c => {
			if (!backgroundId) {
				return defaultContent.backgroundId === c.id;
			}

			return backgroundId === c.id;
		})!;
	};

	const { slug, alt } = findBackground();

	return {
		src: formatSrc(slug),
		alt,
	};
}

export function getChatwootConfig({ env }: { env: EnvironmentProps["env"] }) {
	type ConfigWrapper = {
		[Key in EnvironmentProps["env"]]: {
			BASE_URL: string;
			WEBSITE_TOKEN: string;
		};
	};

	const configWrapper: ConfigWrapper = {
		wiz: {
			BASE_URL: process.env.NEXT_PUBLIC_CHATWOOT_BASE_URL_WIZ!,
			WEBSITE_TOKEN: process.env.NEXT_PUBLIC_CHATWOOT_WEBSITE_TOKEN_WIZ!,
		},
		positiva: {
			BASE_URL: process.env.NEXT_PUBLIC_CHATWOOT_BASE_URL_POSITIVA!,
			WEBSITE_TOKEN: process.env.NEXT_PUBLIC_CHATWOOT_WEBSITE_TOKEN_POSITIVA!,
		},
		meprotege: {
			BASE_URL: process.env.NEXT_PUBLIC_CHATWOOT_BASE_URL_WIZ!,
			WEBSITE_TOKEN: process.env.NEXT_PUBLIC_CHATWOOT_WEBSITE_TOKEN_WIZ!,
		},
	};

	const { BASE_URL, WEBSITE_TOKEN } = configWrapper[env];

	return {
		BASE_URL,
		WEBSITE_TOKEN,
	};
}
