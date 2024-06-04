import fs from "fs";
import path from "path";
const packageJsonPath = path.resolve(process.cwd(), "package.json");
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
const { version } = packageJson;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  publicRuntimeConfig: {
    version,
  },

  pageExtensions: ["page.tsx"],
};

export default nextConfig;
