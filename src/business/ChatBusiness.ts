import { LmStudioConfig } from "../config/LmStudioConfig";
import {
    ChatWithModelResponse,
    LmStudioChatCompletionResponse,
} from "../entity/ChatEntity";

export class ChatBusiness {
    static async DoChatWithModel(message: string): Promise<ChatWithModelResponse> {
        const model = LmStudioConfig.model;

        const response = await fetch(`${LmStudioConfig.baseUrl}/chat/completions`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                model,
                messages: [{ role: "user", content: message }],
                stream: false,
            }),
        });

        if (!response.ok) {
            const detail = await response.text().catch(() => "");
            throw new Error(
                `LM Studio /chat/completions returned ${response.status} ${response.statusText}: ${detail}`
            );
        }

        const body = (await response.json()) as LmStudioChatCompletionResponse;
        const reply = body.choices?.[0]?.message?.content ?? "";

        return { model: body.model || model, reply };
    }
}
