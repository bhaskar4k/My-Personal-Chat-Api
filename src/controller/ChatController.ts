import { Request, Response } from "express";
import { SuccessDto } from "../dto/SuccessDto";
import { ErrorDto } from "../dto/ErrorDto";
import { HttpStatusCode } from "../enum/HttpStatusCode";
import { ChatWithModelRequest } from "../entity/ChatEntity";
import { ChatBusiness } from "../business/ChatBusiness";


export class ChatController {
    static async Ping(_req: Request, res: Response): Promise<void> {
        try {
            res.status(HttpStatusCode.OK).json(
                new SuccessDto("pong", "Chat service reachable.", HttpStatusCode.OK)
            );
        } catch (error) {
            res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json(
                new ErrorDto(null, "An unexpected error occurred.", HttpStatusCode.INTERNAL_SERVER_ERROR)
            );
        }
    }

    static async ChatWithModel(req: Request, res: Response): Promise<void> {
        try {
            const { message } = (req.body ?? {}) as Partial<ChatWithModelRequest>;

            if (typeof message !== "string" || message.trim().length === 0) {
                res.status(HttpStatusCode.BAD_REQUEST).json(
                    new ErrorDto(null, "'message' is required in the request body.", HttpStatusCode.BAD_REQUEST)
                );
                return;
            }

            const result = await ChatBusiness.DoChatWithModel(message);

            res.status(HttpStatusCode.OK).json(
                new SuccessDto(result, "Model response generated.", HttpStatusCode.OK)
            );
        } catch (error) {
            const detail = error instanceof Error ? error.message : String(error);

            res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json(
                new ErrorDto(null, "Failed to get a response from the model.", HttpStatusCode.INTERNAL_SERVER_ERROR, detail)
            );
        }
    }
}
