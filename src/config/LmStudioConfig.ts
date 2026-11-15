const LM_STUDIO_BASE_URL = process.env.LM_STUDIO_BASE_URL;
const LM_STUDIO_MODEL = process.env.LM_STUDIO_MODEL;

if (!LM_STUDIO_BASE_URL) {
    throw new Error("LM_STUDIO_BASE_URL is not configured in .env");
}

if (!LM_STUDIO_MODEL) {
    throw new Error("LM_STUDIO_MODEL is not configured in .env");
}

export const LmStudioConfig = {
    baseUrl: LM_STUDIO_BASE_URL.replace(/\/+$/, ""),
    model: LM_STUDIO_MODEL.trim(),
};
