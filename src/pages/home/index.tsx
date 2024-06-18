import { Circle } from "@/components/circle";
import { Wrapper } from "@/components/wrapper";
import { EnvironmentProps } from "@/types/environment";
import { QueryProps } from "@/types/query";
import { Box } from "@mui/material";

import { BackgroundSection } from "./components/background-section";
import { ChatSection } from "./components/chat-section";
import { InfoSection } from "./components/info-section";
import { UpperSide } from "./components/upperside";

export default function Homepage({
	env,
	query,
}: {
	env: EnvironmentProps["env"];
	query: QueryProps;
}) {
	return (
		<Box
			sx={{
				width: "100%",
				backgroundColor: "secondary.main",
				height: {
					md: "100vh",
					xs: "auto",
				},
			}}
		>
			<Box
				sx={{
					position: "absolute",
					inset: 0,
					overflow: "hidden",
					height: {
						md: "100%",
						xs: "150%",
					},
				}}
			>
				<Circle />
			</Box>

			<Wrapper
				sx={{
					height: "100%",
					paddingTop: 4,
				}}
			>
				<Box
					sx={{
						display: "grid",
						height: "100%",
						gridTemplateColumns: {
							md: "auto minmax(400px, 1fr)",
							xs: "1fr",
						},
						gap: 6.5,
						position: "relative",
					}}
				>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							gap: 3,
							order: {
								md: 1,
								xs: 2,
							},
						}}
					>
						<UpperSide
							env={env}
							query={query}
							sx={{
								display: {
									md: "flex",
									xs: "none",
								},
							}}
						/>

						<Box
							sx={{
								display: "grid",
								height: "100%",
								gap: 2,
								position: "relative",
								justifyContent: {
									md: "space-between",
									xs: "center",
								},
								gridTemplateColumns: {
									xl: "minmax(400px, 600px) 280px",
									lg: "minmax(0, 600px) 280px",
									xs: "minmax(280px, 50%)",
								},
							}}
						>
							<BackgroundSection env={env} query={query} />

							<InfoSection env={env} query={query} />
						</Box>
					</Box>

					<ChatSection env={env} query={query} />
				</Box>
			</Wrapper>
		</Box>
	);
}
