import { channels, indicators } from "@/pages/manager/index.page";
import { QueryProps } from "@/types/query";
import { Box, Divider, Typography } from "@mui/material";
import Image from "next/image";

export const InfoSection = ({ query }: { query: QueryProps }) => {
	const indicatorId = query?.indicatorId;
	const indicator = indicatorId ? indicators.find(c => c.id === indicatorId) : null;
	const indicatorPath = `/indicators/${indicator?.id}.png`;

	const channelId = query?.channelId;
	const channelSupportText = channelId ? channels.find(c => c.id === channelId)?.supportText : null;

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: 3,
				height: {
					md: "85%",
					xs: "100%",
				},

				pb: {
					md: "default",
					xs: 10,
				},
			}}
		>
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

						order: {
							md: 1,
							xs: 2,
						},
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

					{channelSupportText && (
						<Box>
							<Typography
								sx={{
									fontSize: 20,
									color: "#FFF",
									fontWeight: 300,
								}}
							>
								{channelSupportText}
							</Typography>
						</Box>
					)}
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
							mb: {
								md: "default",
								xs: 4,
							},

							order: {
								md: 2,
								xs: 1,
							},
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
	);
};
