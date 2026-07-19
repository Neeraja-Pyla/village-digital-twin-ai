from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes.villages import router as village_router
from app.routes.predict import router as predict_router
from app.routes.stats import router as stats_router





app = FastAPI(
    title="Village Digital Twin AI",
    version="1.0.0"
)



app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(village_router)
app.include_router(predict_router)
app.include_router(stats_router)









@app.get("/")
def home():
    return {"message": "Village Digital Twin AI Backend Running"}

@app.get("/health")
def health():
    return {"status": "healthy"}