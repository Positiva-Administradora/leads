import { Chatwoot } from "@/components/chatwoot";
import { Circle } from "@/components/circle";
import { Wrapper } from "@/components/wrapper";
import { getWhiteLabel } from "@/config";
import { EnvironmentProps } from "@/types/environment";
import { Box, Skeleton, Typography } from "@mui/material";
import Image from "next/image";

import { brokers, channels, indicators } from "../manager/index.page";

export default function Homepage({
	env,
	...query
}: {
	env: EnvironmentProps["env"];
	userFullName: string;
	brokerId: number;
	channelId: number | null;
	indicatorId: number | null;
}) {
	const imageByEnv = env === "wiz" ? "wizmaisvoce" : env;

	const { background } = getWhiteLabel(env);

	const backgroundAlt = background?.alt;
	const backgroundPath = `/backgrounds/${background?.slug}.${background?.format}`;

	const channelId = query?.channelId;
	const channelPath = channelId ? channels.find(c => c.id === channelId)?.slug : imageByEnv;

	const brokerId = query?.brokerId;
	const brokerPath = brokerId ? brokers.find(c => c.id === brokerId)?.slug : "wizmaisvoce";

	const indicatorId = query?.indicatorId;
	const indicatorPath = indicatorId ? indicators.find(c => c.id === indicatorId)?.id : null;

	return (
		<Box
			sx={{
				width: "100%",
				height: "100vh",
			}}
		>
			<Box
				sx={{
					backgroundColor: "secondary.main",
					zIndex: -1,
					position: "absolute",
					inset: 0,
					overflow: "hidden",
				}}
			>
				<Circle />
			</Box>

			<Wrapper
				sx={{
					display: "grid",
					height: "100%",
					paddingTop: 4,
					gridTemplateColumns: "2fr 1fr",
					gap: 6.5,
				}}
			>
				<Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							height: 100,
						}}
					>
						<Box
							sx={{
								width: 200,
								height: "100%",
								position: "relative",
							}}
						>
							{channelPath && (
								<Image
									src={`/channels/${channelPath}.png`}
									alt="Logo"
									fill
									quality={100}
									style={{
										objectFit: "contain",
									}}
								/>
							)}
						</Box>

						<Box
							sx={{
								width: 200,
								height: "100%",
								position: "relative",
							}}
						>
							{brokerPath && (
								<Image
									src={`/brokers/${brokerPath}.png`}
									alt="Logo"
									fill
									style={{
										objectFit: "contain",
									}}
								/>
							)}
						</Box>
					</Box>

					<Box
						sx={{
							display: "grid",
							gridTemplateColumns: "minmax(0, 600px) 280px",
							height: "100%",
						}}
					>
						<Box
							sx={{
								position: "relative",
							}}
						>
							<Box
								sx={{
									position: "relative",
									width: "100%",
									height: "100%",
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
						</Box>

						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-between",
								position: "relative",
								zIndex: 3,
							}}
						>
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
									gap: 4,
								}}
							>
								<Box>
									<Typography
										sx={{
											fontSize: 38,
											color: "#FFF",
											fontWeight: 300,
											lineHeight: 1.1,
										}}
									>
										O cuidado que <strong>você merece e cabe no seu bolso.</strong>
									</Typography>
								</Box>

								<Box>
									<Typography
										sx={{
											fontSize: 20,
											color: "#FFF",
											fontWeight: 300,
										}}
									>
										Texto de Apoio - Canal
									</Typography>
								</Box>
							</Box>

							{indicatorPath && (
								<Box
									sx={{
										mb: 10,
										backgroundColor: "#FFF",
										width: "100%",
										height: "128px",
										borderRadius: "20px",
										p: 2,
									}}
								>
									<Box
										sx={{
											width: 40,
											aspectRatio: "1/1",
											// border: "1px solid",
											// borderColor: "primary.main",
											position: "relative",
										}}
									>
										<Image
											src={`/indicators/${indicatorPath}.png`}
											alt="Logo"
											fill
											style={{
												objectFit: "contain",
											}}
											quality={100}
										/>
									</Box>
								</Box>
							)}
						</Box>
					</Box>
				</Box>

				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						position: "relative",
					}}
				>
					<Box
						sx={{
							flex: 1,
							mb: 4.6,
							position: "relative",
							borderRadius: "20px",
						}}
						id="custom-chat-container"
					>
						<Chatwoot />

						<Skeleton
							variant="rectangular"
							width="100%"
							height="100%"
							sx={{
								position: "absolute",
								inset: 0,
								zIndex: -1,
							}}
						/>
					</Box>

					<Box
						sx={{
							mb: 5.75,
						}}
					>
						<Typography
							sx={{
								fontSize: 14,
								color: "#FFF",
							}}
						>
							*Ao continuar você estará de acordo com nossa Política de Privacidade.
						</Typography>
					</Box>
				</Box>
			</Wrapper>
		</Box>
	);
}
