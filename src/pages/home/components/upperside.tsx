import { EnvironmentProps } from "@/types/environment";
import { QueryProps } from "@/types/query";
import { getBrooker, getChannel } from "@/utils/getDynamicContent";
import { Box, SxProps, Typography } from "@mui/material";
import Image from "next/image";

export const UpperSide = ({
	env,
	sx,
	query,
}: {
	env: EnvironmentProps["env"];
	sx?: SxProps;
	query: QueryProps;
}) => {
	const channel = getChannel({ env, channelId: query?.channelId });
	const broker = getBrooker({ env, brokerId: query?.brokerId });

	return (
		<Box
			sx={{
				height: 100,
				display: "flex",
				justifyContent: "space-between",

				...sx,
			}}
		>
			<Box
				sx={{
					width: {
						md: 200,
						xs: "100%",
					},
					height: "100%",
					position: "relative",
				}}
			>
				<Image
					src={channel.src}
					alt={channel.alt}
					fill
					priority
					quality={100}
					draggable={false}
					style={{
						objectFit: "contain",
						objectPosition: "left",
					}}
				/>
			</Box>

			<Box
				sx={{
					height: 70,
					display: "flex",
					justifyContent: "flex-end",
					alignItems: "center",
					gap: 2,
				}}
			>
				<Typography
					sx={{
						fontSize: 14,
						fontWeight: 700,
						color: "#FFF",
						textTransform: "uppercase",
						whiteSpace: "nowrap",
					}}
				>
					Powered by
				</Typography>

				<Box
					sx={{
						width: 80,
						height: "100%",
						position: "relative",
					}}
				>
					<Image
						src={broker.src}
						alt={broker.alt}
						fill
						draggable={false}
						style={{
							objectFit: "contain",
							objectPosition: "right",
						}}
					/>
				</Box>
			</Box>
		</Box>
	);
};
