import { Control, Controller } from "react-hook-form";

import { backgrounds, brokers, channels, indicators } from "@/data";
import { Autocomplete, Box, Grid, TextField } from "@mui/material";
import Image from "next/image";

import { FormProps } from "../index.page";

export const Form = ({ control }: { control: Control<FormProps, any> }) => {
	return (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<Controller
					control={control}
					name="userFullName"
					render={({ field }) => (
						<TextField label="Nome do Usuário" required fullWidth {...field} />
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
													style={{
														objectFit: "contain",
													}}
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
													style={{
														objectFit: "contain",
													}}
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
					name="backgroundId"
					render={({ field: { value, onChange, ...props }, fieldState: { error } }) => {
						return (
							<Autocomplete
								{...props}
								options={backgrounds}
								value={backgrounds?.find(option => option.id === value) || null}
								onChange={(_, data) => onChange(data?.id)}
								getOptionLabel={option => option.name}
								renderInput={params => (
									<TextField
										{...params}
										label="Background"
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
													src={`/backgrounds/${option.slug}.png`}
													fill
													style={{
														objectFit: "contain",
													}}
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
												style={{
													objectFit: "contain",
												}}
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
	);
};
