from fastapi import APIRouter
import joblib

router = APIRouter()

model = joblib.load("app/ml/model.pkl")

@router.post("/predict")
def predict(village: dict):

    X = [[
        village["population"],
        village["households"],
        village["temperature"],
        village["risk"]
    ]]

    prediction = model.predict(X)[0]
    probability = max(model.predict_proba(X)[0]) * 100


    labels = {
        0:"Safe",
        1:"Moderate",
        2:"Critical"
    }

    recommendations = {
        0:"Routine monitoring is sufficient.",
        1:"Increase irrigation monitoring and healthcare awareness.",
        2:"Immediate intervention recommended. Monitor floods, healthcare, and crop damage."
    }

    return {
    "prediction": labels[prediction],
    "recommendation": recommendations[prediction],
    "confidence": round(probability, 2)
}


