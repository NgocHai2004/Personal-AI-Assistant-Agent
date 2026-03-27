from dotenv import load_dotenv
import os

load_dotenv()
class Settings:
    api_key_groq: str = os.getenv("api_key_groq")
    model_groq: str = os.getenv("model_groq")

settings = Settings()
