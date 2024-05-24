import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Wrapper = styled(Box)(({ theme }) => ({
	width: "100%",
	margin: "0 auto",

	maxWidth: "90vw",

	[theme.breakpoints.up("lg")]: {
		maxWidth: "85vw",
	},

	[theme.breakpoints.up("xl")]: {
		maxWidth: "80vw",
	},
}));
