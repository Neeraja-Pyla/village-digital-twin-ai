from fastapi import APIRouter

router = APIRouter()

@router.post("/predict")
def predict(village: dict):

    risk = village["risk"]

    if risk >= 80:
        prediction = "Critical"
        recommendation = (
            "Deploy emergency response teams, increase healthcare support, "
            "and monitor rainfall continuously."
        )

    elif risk >= 60:
        prediction = "Moderate"
        recommendation = (
            "Increase irrigation monitoring and conduct awareness campaigns."
        )

    else:
        prediction = "Safe"
        recommendation = (
            "Village conditions are stable. Continue routine monitoring."
        )

    return {
        "prediction": prediction,
        "recommendation": recommendation
    }