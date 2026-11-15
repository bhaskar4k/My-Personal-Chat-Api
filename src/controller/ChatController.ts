import { Request, Response } from "express";
import { SuccessDto } from "../dto/SuccessDto";
import { ErrorDto } from "../dto/ErrorDto";
import { HttpStatusCode } from "../enum/HttpStatusCode";


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
}
