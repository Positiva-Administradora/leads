import { getWhiteLabel } from "@/config";
import { EnvironmentProps } from "@/types/environment";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

import { Wrapper } from "./wrapper";

export const Footer = ({ env }: EnvironmentProps) => {
	const whiteLabel = getWhiteLabel(env);

	const ansNumber = whiteLabel?.ansNumber;
	const description = whiteLabel?.description;
	const logo = whiteLabel?.logo;
	const register = whiteLabel?.register;
	const social = whiteLabel?.social;
	const terms = whiteLabel?.terms;

	const logoAlt = logo?.alt;
	const logoPath = `${logo?.slug}.${logo?.format}`;

	return (
		<Box
			sx={{
				backgroundColor: "primary.main",
			}}
		>
			<Wrapper
				component="footer"
				sx={{
					display: "grid",
					py: 4,

					gridTemplateColumns: {
						md: "repeat(3, 1fr)",
						sm: "1fr",
					},
					alignItems: "center",
					gap: {
						md: "unset",
						xs: 8.75,
					},
				}}
			>
				<Stack
					spacing={2}
					sx={{
						whiteSpace: "pre-line",
						order: {
							md: 1,
							xs: 3,
						},
					}}
				>
					<Typography
						sx={{
							fontSize: "1rem",
							fontWeight: "bold",
							color: "#FFF",
							textAlign: {
								md: "left",
								xs: "center",
							},
						}}
					>
						{description}
						{`\n`}
						<Typography
							component="span"
							sx={{
								fontSize: "0.875rem",
								color: "#FFF",
								whiteSpace: "pre-line",
								textAlign: {
									md: "left",
									xs: "center",
								},
							}}
						>
							CNPJ: {register}
						</Typography>
					</Typography>

					<Box>
						<Stack
							direction="row"
							spacing={1}
							sx={{
								color: "white",
								":hover": { textDecoration: "underline" },
								cursor: "pointer",
								width: "min-content",
								whiteSpace: "nowrap",
							}}
							onClick={() => window.open(terms, "_blank")}
						>
							<AssignmentOutlinedIcon />
							<Typography>Termos de Uso e Política de Privacidade</Typography>
						</Stack>
					</Box>
				</Stack>

				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						gap: 4,
						alignItems: "center",
						order: {
							md: 2,
							xs: 1,
						},
					}}
				>
					<Box
						sx={{
							position: "relative",
							width: 159,
							height: 60,
						}}
					>
						<Image src={`/logos/${logoPath}`} alt={logoAlt} fill priority />
					</Box>

					<Box
						sx={{
							display: "flex",
							gap: 4,
							alignItems: "center",
							justifyContent: "space-between",
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
				</Box>

				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						gap: 2,
						ml: "auto",

						mr: {
							md: 0,
							xs: "auto",
						},

						order: {
							md: 3,
							xs: 2,
						},
					}}
				>
					<Box
						sx={{
							backgroundColor: "#000",
							cursor: "default",
							p: 0.5,
							width: "fit-content",
							ml: "auto",
							mr: {
								md: 0,
								xs: "auto",
							},
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
			</Wrapper>
		</Box>
	);
};
