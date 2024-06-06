import { Chatwoot } from "@/components/chatwoot";
import { Circle } from "@/components/circle";
import { Wrapper } from "@/components/wrapper";
import { getWhiteLabel } from "@/config";
import { EnvironmentProps } from "@/types/environment";
import { Box, Divider, Skeleton, Typography } from "@mui/material";
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
	const indicator = indicatorId ? indicators.find(c => c.id === indicatorId) : null;
	const indicatorPath = `/indicators/${indicator?.id}.png`;

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
					gridTemplateColumns: {
						xl: "minmax(400px, 600px) 1fr",
						lg: "minmax(0, 600px) 1fr",
						md: "minmax(0, 1fr) 1fr",
					},
					gap: 2,

					position: "relative",
				}}
			>
				{/* Canal / Background */}

				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						gap: 3,
						position: "relative",
					}}
				>
					<Box
						sx={{
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
									priority
									quality={100}
									draggable={false}
									style={{
										objectFit: "contain",
									}}
								/>
							)}
						</Box>
					</Box>

					<Box
						sx={{
							width: {
								xl: "100%",
								xs: "500px",
							},
							height: {
								xl: "100%",
								xs: "80%",
							},
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
				</Box>

				<Box
					sx={{
						display: "grid",
						gridTemplateColumns: "280px minmax(400px, 1fr)",
						gap: 6.5,
					}}
				>
					{/* Corretora Master / Indicador  */}
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							gap: 3,
							height: "85%",
						}}
					>
						<Box
							sx={{
								height: 100,
								width: "70%",
								ml: "auto",
							}}
						>
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
										width: "100%",
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

						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-between",
								position: "relative",
								zIndex: 3,
								height: "100%",
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
										Planos exclusivos para os médicos do CREMESP.
									</Typography>
								</Box>
							</Box>

							{indicator && (
								<Box
									sx={{
										backgroundColor: "#FFF",
										width: "100%",
										borderRadius: "20px",
										p: 2,
										display: "flex",
										gap: 1,
										alignItems: "flex-start",
									}}
								>
									<Box
										sx={{
											width: 40,
											aspectRatio: "1/1",
											position: "relative",
										}}
									>
										<Image
											src={indicatorPath}
											alt="Logo"
											fill
											style={{
												objectFit: "contain",
											}}
											draggable={false}
											quality={100}
										/>
									</Box>

									<Box>
										<Typography
											sx={{
												fontSize: 14,
												fontWeight: 300,
											}}
										>
											Indicado por
										</Typography>

										<Typography
											sx={{
												fontSize: 20,
												fontWeight: 700,
												lineHeight: "110%",
											}}
										>
											{indicator.name}
										</Typography>

										<Typography
											sx={{
												fontSize: 14,
												fontWeight: 700,
												mt: 0.5,
											}}
										>
											{indicator.position}
										</Typography>

										<Divider
											sx={{
												mt: 0.5,
												mb: 2,
												height: 1,
												backgroundColor: "#000",
											}}
										/>

										<Box
											sx={{
												display: "flex",
												gap: 1,
											}}
										>
											<Typography
												sx={{
													fontSize: 14,
													fontWeight: 300,
												}}
											>
												Fale comigo
											</Typography>

											<Box
												sx={{
													display: "flex",
													gap: 1,
												}}
											>
												{indicator.socialLinks.map(social => (
													<Box
														key={social.id}
														sx={{
															width: 24,
															aspectRatio: "1/1",
															position: "relative",
															cursor: "pointer",
														}}
														onClick={() => window.open(social.url, "_blank")}
													>
														<Image
															src={`/social/${social.slug}.svg`}
															alt={social.name}
															draggable={false}
															fill
															style={{
																objectFit: "contain",
															}}
															quality={100}
														/>
													</Box>
												))}
											</Box>
										</Box>
									</Box>
								</Box>
							)}
						</Box>
					</Box>

					{/* Chat */}
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							position: "relative",
							height: "100%",
						}}
					>
						<Box
							sx={{
								mb: 4.6,
								position: "relative",
								borderRadius: "20px",
								height: "85%",
								filter:
									"drop-shadow(0px 287px 115px rgba(0, 0, 0, 0.01)) drop-shadow(0px 161px 97px rgba(0, 0, 0, 0.05)) drop-shadow(0px 72px 72px rgba(0, 0, 0, 0.09)) drop-shadow(0px 18px 39px rgba(0, 0, 0, 0.1))",
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
									borderRadius: "20px",
								}}
							/>
						</Box>

						<Box>
							<Typography
								sx={{
									fontSize: 14,
									color: "#FFF",
									mb: 2,
								}}
							>
								*Ao continuar você estará de acordo com nossa Política de Privacidade.
							</Typography>
						</Box>
					</Box>
				</Box>
			</Wrapper>
		</Box>
	);
}
