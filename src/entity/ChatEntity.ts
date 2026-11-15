export interface ChatWithModelRequest {
    message: string;
}

export interface LmStudioChatCompletionResponse {
    id: string;
    model: string;
    choices: Array<{
        index: number;
        message: { role: string; content: string };
        finish_reason: string | null;
    }>;
}

