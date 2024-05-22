import Homepage from "@/pages/home/";
import { getDefaultServerSideProps } from "@/utils/get-default-server-side-props";
import { GetServerSidePropsContext } from "next";

export default function Index(pageProps) {
	return <Homepage {...pageProps} />;
}

export const getServerSideProps = (context: GetServerSidePropsContext) => {
	const props = getDefaultServerSideProps(context);
	return props;
};
