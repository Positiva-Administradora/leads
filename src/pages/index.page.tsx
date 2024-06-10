import Homepage from "@/pages/home/";
import { EnvironmentProps } from "@/types/environment";
import { QueryProps } from "@/types/query";
import { decrypt } from "@/utils/crypto";
import { getDefaultServerSideProps } from "@/utils/get-default-server-side-props";
import { GetServerSidePropsContext } from "next";

export default function Index(
	props: EnvironmentProps & {
		query: QueryProps;
	},
) {
	return <Homepage {...props} />;
}

export const getServerSideProps = (context: GetServerSidePropsContext) => {
	const props = getDefaultServerSideProps(context);
	const k = context.query?.k as string | undefined;

	if (!k) {
		return props;
	}

	const result = JSON.parse(decrypt(k));

	return {
		props: {
			...props.props,

			query: {
				...result,
			},
		},
	};
};
