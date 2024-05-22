import { Circle } from "@/components/circle";
import { Wrapper } from "@/components/wrapper";
import { getWhiteLabel } from "@/config";
import { EnvironmentProps } from "@/types/environment";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function Homepage({ env }: { env: EnvironmentProps["env"] }) {
	const { background } = getWhiteLabel(env);

	const backgroundAlt = background?.alt;
	const backgroundPath = `/backgrounds/${background?.slug}.${background?.format}`;

	return (
		<Box
			sx={{
				width: "100%",
				height: "100%",
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
								border: "1px solid",
								borderColor: "primary.main",
							}}
						>
							Canal
						</Box>

						<Box
							sx={{
								width: 200,
								height: "100%",
								border: "1px solid",
								borderColor: "primary.main",
							}}
						>
							Corretora Master
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
									alt={backgroundAlt}
									layout="fill"
									objectFit="contain"
									objectPosition="left bottom"
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
								Dados de Indicador
							</Box>
						</Box>
					</Box>
				</Box>

				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
					}}
				>
					<Box
						sx={{
							backgroundColor: "#FFF",
							flex: 1,
							mb: 4.6,
						}}
					>
						Chat
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
