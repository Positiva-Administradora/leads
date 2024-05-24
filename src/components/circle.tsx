import { Box, useTheme } from "@mui/material";
import { darken } from "polished";

export const Circle = () => {
	const theme = useTheme();

	return (
		<Box
			sx={{
				position: "absolute",
				aspectRatio: "1/1",
				height: "100%",
				borderRadius: "50%",
				background: `linear-gradient(180deg, ${darken(0.01, theme.palette.terciary.main)} 0%, ${darken(0.1, theme.palette.secondary.main)} 100%)`,
				padding: 3.5,
				top: "-8%",
				left: "-15%",
			}}
		>
			<Box
				sx={{
					width: "100%",
					height: "100%",
					borderRadius: "50%",
					background: `linear-gradient(180deg, ${theme.palette.terciary.main} 0%, ${darken(0.05, theme.palette.terciary.main)} 100%)`,
				}}
			/>
		</Box>
	);
};
