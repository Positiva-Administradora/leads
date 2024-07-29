import { Fragment } from "react";

import { EnvironmentProps } from "@/types/environment";
import { QueryProps } from "@/types/query";
import { getBackground } from "@/utils/getDynamicContent";
import { Box } from "@mui/material";
import Image from "next/image";

export const BackgroundSection = ({
	env,
	query,
}: {
	env: EnvironmentProps["env"];
	query: QueryProps;
}) => {
	const background = getBackground({ env, backgroundId: query?.backgroundId });

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
					src={background.src}
					alt={background.alt}
					sizes="(min-width: 1024px) 800px, 100vw"
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
