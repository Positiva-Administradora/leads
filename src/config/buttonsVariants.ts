declare module "@mui/material/Button" {
	interface ButtonPropsColorOverrides {
		gray: true;
		light: true;
	}
}

export const buttonVariants = [
	{
		props: { size: "small" },
		style: {
			fontSize: 14,
			padding: "8px 16px 8px 16px",
		},
	},
	{
		props: { size: "medium" },
		style: {
			fontSize: 16,
			padding: "16px 24px 16px 24px",
		},
	},
	{
		props: { size: "large" },
		style: {
			fontSize: 18,
			padding: "16px 24px 16px 24px",
		},
	},
];
