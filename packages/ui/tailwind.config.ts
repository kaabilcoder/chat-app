import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config/web";

const config: Pick<Config, "presets" | "content"> = {
    content: ["./src/**/*.tsx"],
    presets: [sharedConfig],
};

export default config;
