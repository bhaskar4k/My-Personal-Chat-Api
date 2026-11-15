import { Router } from "express";
import { ChatController } from "../controller/ChatController";

const ChatRouter = Router();

ChatRouter.get("/Ping", ChatController.Ping);
ChatRouter.post("/ChatWithModel", ChatController.ChatWithModel);

export default ChatRouter;
