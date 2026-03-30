import { useState } from "react";
import { sendMessage } from "../api/chatApi";

export const useChat = () => {
    const [messages, setMessages] = useState([
        {
            role: "assistant",
            content: "Xin chào, tôi có thể giúp gì cho bạn?",
        },
    ]);
    const [loading, setLoading] = useState(false);

    const sendUserMessage = async (text) => {
        if (!text.trim()) return;

        const userMessage = {
            role: "user",
            content: text,
        };

        setMessages((prev) => [...prev, userMessage]);
        setLoading(true);

        try {
            const data = await sendMessage(text);

            const assistantMessage = {
                role: "assistant",
                content: data.response,
            };

            setMessages((prev) => [...prev, assistantMessage]);
        } catch (error) {
            const errorMessage = {
                role: "assistant",
                content: "Có lỗi xảy ra khi gọi backend.",
            };

            setMessages((prev) => [...prev, errorMessage]);
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return {
        messages,
        loading,
        sendUserMessage,
    };
};