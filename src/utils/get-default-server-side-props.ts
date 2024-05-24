import { EnvironmentProps } from "@/types/environment";
import { GetServerSidePropsContext } from "next";

import { getEnvironment } from "./get-environment";

export const getDefaultServerSideProps = (
	context: GetServerSidePropsContext,
): {
	props: EnvironmentProps;
} => {
	const host = context.req.headers.host!;
	const { env, ambient } = getEnvironment(host);

	return {
		props: {
			env,
			ambient,
		},
	};
};
