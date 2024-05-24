import { create } from "zustand";

export interface Environment {
	env: "wiz" | "positiva" | "meprotege";
	ambient: "dev" | "hml" | "prd";
}

export const useEnvironment = create<{
	environment?: Environment;
	setEnvironment: (environment: Environment) => void;
}>(set => ({
	environment: undefined,
	setEnvironment: (environment: Environment) => set({ environment }),
}));
