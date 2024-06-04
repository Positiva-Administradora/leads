import { Box, useTheme } from "@mui/material";

export const Circle = () => {
	const theme = useTheme();

	return (
		<Box
			sx={{
				position: "absolute",
				aspectRatio: "1/1",
				height: "150vh",
				borderRadius: "50%",
				background: `linear-gradient(180deg, ${theme.palette.gradient.accent.start} 0%, ${theme.palette.gradient.accent.end} 100%)`,
				padding: 4.5,
				top: "-20%",
				left: "-25%",
			}}
		>
			<Box
				sx={{
					width: "100%",
					height: "100%",
					borderRadius: "50%",
					background: `linear-gradient(180deg, ${theme.palette.gradient.highlight.start} 0%, ${theme.palette.gradient.highlight.end} 100%)`,
				}}
			/>
		</Box>
	);
};
