import { useState } from "react";

export default function ChatInput({ onSend, loading }) {
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.trim() || loading) return;

        onSend(input);
        setInput("");
    };

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Nhập câu hỏi của bạn..."
                style={styles.input}
            />
            <button type="submit" style={styles.button} disabled={loading}>
                Gửi
            </button>
        </form>
    );
}

const styles = {
    form: {
        display: "flex",
        gap: "12px",
        marginTop: "16px",
    },
    input: {
        flex: 1,
        padding: "12px",
        borderRadius: "10px",
        border: "1px solid #ccc",
    },
    button: {
        padding: "12px 20px",
        border: "none",
        borderRadius: "10px",
        cursor: "pointer",
    },
};