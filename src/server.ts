import "dotenv/config";
import app from "./app";


const PORT = Number(process.env.PORT) || 3000;
const API_SERVER_URL = process.env.API_SERVER_URL || "http://localhost";


async function StartServer(): Promise<void> {
    try {
        app.listen(PORT, () => {
            console.log(`✅ API Server Running At ${API_SERVER_URL}:${PORT}`);
        });
    } catch (error) {
        console.error("❌ Failed to start API server:", error);
        process.exit(1);
    }
}

StartServer();
