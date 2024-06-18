import { Chatwoot } from "@/components/chatwoot";
import { EnvironmentProps } from "@/types/environment";
import { QueryProps } from "@/types/query";
import { Box, Skeleton, Typography } from "@mui/material";

import { UpperSide } from "./upperside";

export const ChatSection = ({
	env,
	query,
}: {
	env: EnvironmentProps["env"];
	query: QueryProps;
}) => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				position: "relative",
				height: "100%",
				order: {
					md: 2,
					xs: 1,
				},
			}}
		>
			<UpperSide
				env={env}
				query={query}
				sx={{
					display: {
						md: "none",
						xs: "flex",
					},

					alignItems: "center",
					mb: 2,
					height: 70,
				}}
			/>

			<Box
				sx={{
					mb: 4.6,
					position: "relative",
					borderRadius: "20px",
					height: {
						md: "85%",
						xs: "650px",
					},
					boxShadow: "0px 287px 115px rgba(0, 0, 0, 0.01), 0px 161px 97px rgba(0, 0, 0, 0.05)",
				}}
				id="custom-chat-container"
			>
				<Chatwoot env={env} />

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
	);
};
