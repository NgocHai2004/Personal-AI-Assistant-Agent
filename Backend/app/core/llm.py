from groq import Groq
from .config import settings

client = Groq(api_key=settings.api_key_groq)
def generate_response(user_message: str):
    response = client.chat.completions.create(
        model=settings.model_groq,
        messages=[
        {
            "role": "system",
            "content": "You are a helpful AI assistant."
        },
        {
            "role": "user",
            "content": user_message
                }
        ],
        temperature=0.7,
    )

    return response.choices[0].message.content


