from fastapi import FastAPI

app = FastAPI(
    title="01 AI Service",
    description="AI microservice for the 01 project",
    version="1.0.0",
)

@app.get("/")
def health_check():
    return {
        "status": "ok",
        "service": "fastapi",
    }

@app.get("/api/health")
def api_health():
    return {
        "status": "ok",
        "service": "ai",
    }
