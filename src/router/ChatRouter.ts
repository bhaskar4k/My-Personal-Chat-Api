import { Router } from "express";
import { ChatController } from "../controller/ChatController";

const ChatRouter = Router();

ChatRouter.get("/Ping", ChatController.Ping);

export default ChatRouter;
