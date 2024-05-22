import { EnvironmentProps } from "@/types/environment";

export const getEnvironment = (contextHost: string): EnvironmentProps => {
	if (contextHost.includes("localhost")) {
		return {
			env: "wiz",
			ambient: "dev",
		};
	}

	const host = contextHost.split(".");
	const [_, ambientOnHost, companyOnHost] = host;
	const isDevelopmentEnvironment = ["dev", "hml"].includes(ambientOnHost);

	let ambient = "prd";
	let env = host[0];

	if (isDevelopmentEnvironment) {
		ambient = ambientOnHost;
		env = companyOnHost;
	}

	if (env === "wizmaisvoce") env = "wiz";
	if (env === "latin-re") env = "latin";

	return {
		env: env as EnvironmentProps["env"],
		ambient: ambient as EnvironmentProps["ambient"],
	};
};
