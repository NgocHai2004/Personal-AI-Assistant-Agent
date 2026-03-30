export default function ChatWindow({ messages, loading }) {
    return (
        <div style={styles.container}>
            {messages.map((message, index) => (
                <div
                    key={index}
                    style={{
                        ...styles.message,
                        alignSelf: message.role === "user" ? "flex-end" : "flex-start",
                        backgroundColor: message.role === "user" ? "#dbeafe" : "#f3f4f6",
                    }}
                >
                    <strong>{message.role === "user" ? "Bạn" : "Assistant"}:</strong>
                    <div>{message.content}</div>
                </div>
            ))}

            {loading && (
                <div style={{ ...styles.message, backgroundColor: "#fef3c7" }}>
                    Assistant đang trả lời...
                </div>
            )}
        </div>
    );
}

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        height: "70vh",
        overflowY: "auto",
        border: "1px solid #ddd",
        borderRadius: "12px",
        padding: "16px",
        backgroundColor: "#fff",
    },
    message: {
        maxWidth: "75%",
        padding: "12px",
        borderRadius: "12px",
        lineHeight: 1.5,
    },
};