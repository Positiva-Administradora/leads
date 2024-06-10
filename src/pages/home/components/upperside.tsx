import { brokers, channels } from "@/pages/manager/index.page";
import { EnvironmentProps } from "@/types/environment";
import { QueryProps } from "@/types/query";
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
	const imageByEnv = env === "wiz" ? "wizmaisvoce" : env;

	const channelId = query?.channelId;
	const channelPath = channelId ? channels.find(c => c.id === channelId)?.slug : imageByEnv;

	const brokerId = query?.brokerId;
	const brokerPath = brokerId ? brokers.find(c => c.id === brokerId)?.slug : "wizmaisvoce";

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
				{channelPath && (
					<Image
						src={`/channels/${channelPath}.png`}
						alt="Logo"
						fill
						priority
						quality={100}
						draggable={false}
						style={{
							objectFit: "contain",
							objectPosition: "left",
						}}
					/>
				)}
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
					{brokerPath && (
						<Image
							src={`/brokers/${brokerPath}.png`}
							alt="Logo"
							fill
							draggable={false}
							style={{
								objectFit: "contain",
								objectPosition: "right",
							}}
						/>
					)}
				</Box>
			</Box>
		</Box>
	);
};
