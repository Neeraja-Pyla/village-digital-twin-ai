from fastapi import APIRouter
import json

router = APIRouter()

@router.get("/stats")
def stats():

    with open("app/data/villages.json") as f:
        villages = json.load(f)

    return {
        "villages": len(villages),
        "averageRisk":
            round(sum(v["risk"] for v in villages)/len(villages),1),
        "highestRisk":
            max(v["risk"] for v in villages),
        "population":
            sum(v["population"] for v in villages)
    }