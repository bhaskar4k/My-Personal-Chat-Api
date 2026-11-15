import express from "express";
import { HttpStatusCode } from "./enum/HttpStatusCode";
import { SuccessDto } from "./dto/SuccessDto";
import CorsConfig from "./config/CorsConfig";
import ChatRouter from "./router/ChatRouter";

const app = express();

app.use(CorsConfig);
app.use(express.json());

// Routers
app.use("/Api/Chat", ChatRouter);


app.get("/api/health", async (_req, res) => {
    res.status(HttpStatusCode.OK).json(
        new SuccessDto(
            true,
            "API Is Healthy ✅ 💪",
            HttpStatusCode.OK
        )
    );
});

export default app;
