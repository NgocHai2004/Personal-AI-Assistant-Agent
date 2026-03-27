from app.core.llm import generate_response

def handle_chat(message: str) -> str:
    answer = generate_response(message)
    return answer