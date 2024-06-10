import { Fragment } from "react";

import { getWhiteLabel } from "@/config";
import { EnvironmentProps } from "@/types/environment";
import { Box } from "@mui/material";
import Image from "next/image";

export const BackgroundSection = ({ env }: { env: EnvironmentProps["env"] }) => {
	const { background } = getWhiteLabel(env);

	const backgroundAlt = background?.alt;
	const backgroundPath = `/backgrounds/${background?.slug}.${background?.format}`;

	return (
		<Fragment>
			<Box
				sx={{
					display: {
						xl: "none",
						lg: "block",
						xs: "none",
					},
				}}
			/>

			<Box
				sx={{
					width: {
						xl: "100%",
						xs: "500px",
					},
					height: "100%",
					zIndex: 3,
					bottom: 0,
					position: {
						xl: "relative",
						xs: "absolute",
					},

					display: {
						lg: "block",
						xs: "none",
					},
				}}
			>
				<Image
					src={backgroundPath}
					sizes="(min-width: 1024px) 800px, 100vw"
					alt={backgroundAlt}
					fill
					style={{
						objectFit: "contain",
						objectPosition: "left bottom",
					}}
					quality={100}
					draggable={false}
				/>
			</Box>
		</Fragment>
	);
};
