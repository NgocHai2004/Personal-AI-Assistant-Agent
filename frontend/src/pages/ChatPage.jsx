import ChatWindow from "../components/chat/ChatWindow";
import ChatInput from "../components/chat/ChatInput";
import { useChat } from "../hooks/useChat";

export default function ChatPage() {
    const { messages, loading, sendUserMessage } = useChat();

    return (
        <div style={styles.page}>
            <h1>Personal AI Assistant</h1>
            <p>Giai đoạn 1 - Basic Chat</p>

            <ChatWindow messages={messages} loading={loading} />
            <ChatInput onSend={sendUserMessage} loading={loading} />
        </div>
    );
}

const styles = {
    page: {
        maxWidth: "900px",
        margin: "0 auto",
        padding: "24px",
        fontFamily: "Arial, sans-serif",
    },
};