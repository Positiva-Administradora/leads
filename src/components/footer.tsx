import { getWhiteLabel } from "@/config";
import { EnvironmentProps } from "@/types/environment";
import { Box } from "@mui/material";
import Image from "next/image";

import { Wrapper } from "./wrapper";

export const Footer = ({ env }: EnvironmentProps) => {
	const { ansNumber, register, social, terms, logo } = getWhiteLabel(env);

	const logoAlt = logo?.alt;
	const logoPath = `${logo?.slug}.${logo?.format}`;

	return (
		<Box
			sx={{
				width: "100%",
			}}
		>
			<Box
				sx={{
					backgroundColor: "primary.main",
				}}
			>
				<Wrapper
					component="footer"
					sx={{
						py: {
							sm: 4.75,
							xs: 4.5,
						},
						display: "flex",
						justifyContent: {
							xs: "center",
							sm: "space-between",
						},
						alignItems: "center",
						gap: {
							xs: 5,
							sm: 7,
							xl: 10,
						},
					}}
				>
					<Box
						sx={{
							display: "flex",
							flexDirection: {
								xs: "column",
								sm: "row",
							},
							alignItems: "center",
							gap: {
								xs: 5,
								sm: 7,
								xl: 10,
							},
						}}
					>
						<Box>
							<Box
								sx={{
									position: "relative",
									width: 125,
									height: 87.5,
								}}
							>
								<Image src={`/logos/${logoPath}`} alt={logoAlt} fill priority />
							</Box>
						</Box>

						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								gap: 2,
							}}
						>
							<Box
								sx={{
									display: "flex",
									gap: 0.5,
									alignItems: "center",
								}}
							>
								{social?.map(({ slug, href, alt }) => (
									<Box
										key={alt}
										sx={{
											display: "grid",
											placeItems: "center",
											width: "30px",
											height: "30px",
										}}
									>
										<Box
											sx={{
												width: "22px",
												height: "22px",
												position: "relative",
												cursor: "pointer",
											}}
											onClick={() => window.open(href, "_blank")}
										>
											<Image src={`/social/${slug}.svg`} alt={alt} fill priority />
										</Box>
									</Box>
								))}
							</Box>
							<Box
								sx={{
									backgroundColor: "#000",
									cursor: "default",
									p: 0.5,
								}}
							>
								<Box
									sx={{
										border: "1px solid",
										borderColor: "#FFF",
										color: "#FFF",
										fontSize: "0.875rem",
										fontWeight: "bold",
										p: 0.5,
									}}
								>
									ANS - nº {ansNumber}
								</Box>
							</Box>
						</Box>
					</Box>
				</Wrapper>
			</Box>
		</Box>
	);
};
