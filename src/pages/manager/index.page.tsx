import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { Wrapper } from "@/components/wrapper";
import { base64, encrypt } from "@/utils/crypto";
import { getDefaultServerSideProps } from "@/utils/get-default-server-side-props";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import LinkIcon from "@mui/icons-material/Link";
import LoopIcon from "@mui/icons-material/Loop";
import { Box, Button, Container, Divider, Typography, IconButton } from "@mui/material";
import { GetServerSidePropsContext } from "next";

import { Form } from "./components/form";

export interface FormProps {
	userFullName: string;
	clientFullName: string;
	brokerId: number | null;
	channelId: number | null;
	indicatorId: number | null;
	backgroundId: number | null;
}

export default function Manager() {
	const [encryptedLink, setEncryptedLink] = useState<string | null>(null);

	const { control, handleSubmit, reset, formState } = useForm<FormProps>({
		defaultValues: {
			userFullName: "",
			clientFullName: "",
			brokerId: null,
			channelId: null,
			indicatorId: null,
			backgroundId: null,
		},
	});

	async function submit({ userFullName, ...data }: FormProps) {
		const encrypted = encrypt(JSON.stringify(data));
		const usernameBase64 = base64(userFullName);

		const origin = window.location.origin;
		const query = `?k=${encrypted}&u=${usernameBase64}`;
		const link = `${origin}${query}`;

		setEncryptedLink(link);

		reset(data, {
			keepValues: true,
		});

		toast.success("Link gerado com sucesso!");
	}

	return (
		<Box
			sx={{
				width: "100%",
				height: "80vh",
				backgroundColor: "#F6EFE6",
			}}
		>
			<Wrapper sx={{ display: "grid", placeItems: "center", height: "100%", py: 4 }}>
				<Container
					maxWidth="md"
					sx={{
						backgroundColor: "#FFF",
						minHeight: "70%",
						py: 4,
						px: 6,
						display: "flex",
						flexDirection: "column",
						borderRadius: "20px",
						boxShadow: 2,
					}}
				>
					<Form control={control} />

					<Divider sx={{ my: 2 }} />

					<Box
						sx={{
							display: "flex",
						}}
					>
						<Box
							sx={{
								display: "flex",
								justifyContent: "space-between",
								mt: 2,
								gap: 2,
								width: "100%",
							}}
						>
							<Button
								variant="contained"
								color="secondary"
								sx={{
									fontSize: 14,
									width: "min-content",
									whiteSpace: "nowrap",
									lineHeight: 0,
									borderRadius: 1,
									minHeight: "30px",
									maxHeight: "30px",
									py: 3,
									px: 5,
								}}
								onClick={() => {
									reset({
										userFullName: undefined,
										brokerId: null,
										channelId: null,
										indicatorId: null,
										backgroundId: null,
									});
								}}
							>
								Abandonar
							</Button>

							<Button
								variant="contained"
								color="primary"
								sx={{
									fontSize: 14,
									width: "min-content",
									whiteSpace: "nowrap",
									lineHeight: 0,
									borderRadius: 1,
									minHeight: "30px",
									maxHeight: "30px",
									py: 3,
									px: 5,
								}}
								onClick={handleSubmit(submit)}
								disabled={!formState.isDirty}
							>
								<LoopIcon
									sx={{
										mr: 1,
										color: "#FFF",
									}}
								/>
								Gerar Link
							</Button>
						</Box>
					</Box>

					<Box
						sx={{
							mt: 4,
							p: 1,
							backgroundColor: "#FFF",
							border: "1px solid",
							borderColor: "primary.main",
							display: "grid",
							gridTemplateColumns: "40px 1fr 40px",
							gap: 1,
						}}
					>
						<IconButton onClick={() => encryptedLink && window.open(encryptedLink, "_blank")}>
							<ContentCopyIcon
								sx={{
									fontSize: 16,
								}}
							/>
						</IconButton>

						<Box
							sx={{
								whiteSpace: "nowrap",
								overflow: "hidden",
								textOverflow: "ellipsis",
								display: "flex",
								alignItems: "center",
							}}
						>
							<Typography
								sx={{
									fontSize: 14,
									fontWeight: "bold",
									color: "primary.main",
								}}
							>
								{encryptedLink}
							</Typography>
						</Box>

						<IconButton onClick={() => encryptedLink && window.open(encryptedLink, "_blank")}>
							<LinkIcon />
						</IconButton>
					</Box>
				</Container>
			</Wrapper>
		</Box>
	);
}

export const getServerSideProps = (context: GetServerSidePropsContext) => {
	const props = getDefaultServerSideProps(context);

	return props;
};
