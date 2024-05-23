import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

import { Wrapper } from "@/components/wrapper";
import { encrypt } from "@/utils/crypto";
import { getDefaultServerSideProps } from "@/utils/get-default-server-side-props";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import LinkIcon from "@mui/icons-material/Link";
import LoopIcon from "@mui/icons-material/Loop";
import {
	Autocomplete,
	Box,
	Button,
	Container,
	Divider,
	Grid,
	TextField,
	Typography,
} from "@mui/material";
import { GetServerSidePropsContext } from "next";
import Image from "next/image";

export const indicators = [
	{
		id: 1,
		name: "Paulo Sampaio",
		position: "Ger. Comercial",
		socialLinks: [
			{
				id: 1,
				slug: "whatsapp",
				name: "WhatsApp",
				url: "https://www.whatsapp.com/",
			},
			{
				id: 2,
				slug: "email",
				name: "E-mail",
				url: "mailto:paulo@gmail.com",
			},
		],
	},
	{
		id: 2,
		name: "João Silva",
		position: "Ger. Caixa",
		socialLinks: [
			{
				id: 1,
				slug: "whatsapp",
				name: "WhatsApp",
				url: "https://www.whatsapp.com/",
			},
			{
				id: 2,
				slug: "email",
				name: "E-mail",
				url: "mailto:",
			},
		],
	},
];

export const brokers = [
	{
		id: 1,
		slug: "wizmaisvoce",
		name: "Wiz Mais Você",
	},
];

export const channels = [
	{
		id: 1,
		slug: "wizmaisvoce",
		name: "Wiz Mais Você",
	},
	{
		id: 2,
		slug: "positiva",
		name: "Positiva",
	},
	{
		id: 3,
		slug: "meprotege",
		name: "Me Protege",
	},
	{
		id: 4,
		slug: "caixa",
		name: "Caixa",
	},
];

interface Form {
	userFullName: string;
	brokerId: number | null;
	channelId: number | null;
	indicatorId: number | null;
}

export default function Manager() {
	const [encryptedLink, setEncryptedLink] = useState<string | null>(null);

	const { control, handleSubmit, reset, formState } = useForm<Form>({
		defaultValues: {
			userFullName: "",
			brokerId: null,
			channelId: null,
			indicatorId: null,
		},
	});

	async function submit(data: Form) {
		const encrypted = encrypt(JSON.stringify(data));

		const origin = window.location.origin;
		const query = `?k=${encrypted}`;

		const link = `${origin}${query}`;

		setEncryptedLink(link);
	}

	return (
		<Box
			sx={{
				width: "100%",
				height: "100%",
				backgroundColor: "#F6EFE6",
			}}
		>
			<Wrapper sx={{ display: "grid", placeItems: "center", height: "100%" }}>
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
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<Controller
								control={control}
								name="userFullName"
								render={({ field }) => (
									<TextField label="Nome Completo do Cliente" required fullWidth {...field} />
								)}
							/>
						</Grid>

						<Grid item xs={12}>
							<Controller
								control={control}
								name="brokerId"
								rules={{ required: "Campo obrigatório" }}
								render={({ field: { value, onChange, ...props }, fieldState: { error } }) => {
									return (
										<Autocomplete
											{...props}
											options={brokers}
											value={brokers?.find(option => option.id === value) || null}
											onChange={(_, data) => onChange(data?.id)}
											getOptionLabel={option => option.name}
											renderInput={params => (
												<TextField
													{...params}
													required
													label="Corretora (Master)"
													variant="outlined"
													helperText={error?.message}
													error={!!error?.message}
												/>
											)}
											renderOption={(props, option, _, ownerState) => (
												<Box
													{...props}
													sx={{
														padding: "5px",
														display: "flex",
														justifyContent: "space-between",
														flex: 1,
														gap: 2,
													}}
													component="li"
												>
													{ownerState.getOptionLabel(option)}

													<Box
														sx={{
															ml: "auto",
															p: 0.5,
															backgroundColor: "secondary.main",
															borderRadius: 2,
														}}
													>
														<Box
															sx={{
																position: "relative",
																width: 40,
																aspectRatio: "1/1",
															}}
														>
															<Image
																src={`/brokers/${option.slug}.png`}
																fill
																objectFit="contain"
																alt={option.name}
															/>
														</Box>
													</Box>
												</Box>
											)}
										/>
									);
								}}
							/>
						</Grid>

						<Grid item xs={12}>
							<Controller
								control={control}
								name="channelId"
								render={({ field: { value, onChange, ...props }, fieldState: { error } }) => {
									return (
										<Autocomplete
											{...props}
											options={channels}
											value={channels?.find(option => option.id === value) || null}
											onChange={(_, data) => onChange(data?.id)}
											getOptionLabel={option => option.name}
											renderInput={params => (
												<TextField
													{...params}
													label="Canal"
													variant="outlined"
													helperText={error?.message}
													error={!!error?.message}
												/>
											)}
											renderOption={(props, option, _, ownerState) => (
												<Box
													{...props}
													sx={{
														padding: "5px",
														display: "flex",
														justifyContent: "space-between",
														flex: 1,
														gap: 2,
													}}
													component="li"
												>
													{ownerState.getOptionLabel(option)}

													<Box
														sx={{
															ml: "auto",
															p: 0.5,
															backgroundColor: "secondary.main",
															borderRadius: 2,
														}}
													>
														<Box
															sx={{
																position: "relative",
																width: 40,
																aspectRatio: "1/1",
															}}
														>
															<Image
																src={`/channels/${option.slug}.png`}
																fill
																objectFit="contain"
																alt={option.name}
															/>
														</Box>
													</Box>
												</Box>
											)}
										/>
									);
								}}
							/>
						</Grid>

						<Grid item xs={12}>
							<Controller
								control={control}
								name="indicatorId"
								render={({ field: { value, onChange, ...props }, fieldState: { error } }) => {
									return (
										<Autocomplete
											{...props}
											options={indicators}
											value={indicators?.find(option => option.id === value) || null}
											onChange={(_, data) => onChange(data?.id)}
											getOptionLabel={option => option.name}
											groupBy={option => option.position}
											renderInput={params => (
												<TextField
													{...params}
													label="Indicador"
													variant="outlined"
													helperText={error?.message}
													error={!!error?.message}
												/>
											)}
											renderOption={(props, option, _, ownerState) => (
												<Box
													{...props}
													sx={{
														padding: "5px",
														display: "flex",
														justifyContent: "space-between",
														flex: 1,
														gap: 2,
													}}
													component="li"
												>
													{ownerState.getOptionLabel(option)}

													<Box
														sx={{
															position: "relative",

															ml: "auto",
															width: 30,
															aspectRatio: "1/1",
														}}
													>
														<Image
															src={`/indicators/${option.id}.png`}
															fill
															objectFit="contain"
															alt={option.name}
														/>
													</Box>
												</Box>
											)}
										/>
									);
								}}
							/>
						</Grid>
					</Grid>

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
							p: 2,
							backgroundColor: "#FFF",
							border: "1px solid",
							borderColor: "primary.main",
							whiteSpace: "break-spaces",
							display: "grid",
							gridTemplateColumns: "40px 1fr 40px",
							gap: 1,
						}}
					>
						<Box
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								cursor: "pointer",
							}}
							onClick={() => {
								// navigator.clipboard.writeText(encryptedLink);
							}}
						>
							<ContentCopyIcon
								sx={{
									mr: 1,
								}}
							/>
						</Box>

						<Box
							sx={{
								wordWrap: "break-word",
								overflow: "hidden",
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

						<Box
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								cursor: "pointer",
							}}
							onClick={() => {
								window.open(encryptedLink, "_blank");
							}}
						>
							<LinkIcon
								sx={{
									mr: 1,
								}}
							/>
						</Box>
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
