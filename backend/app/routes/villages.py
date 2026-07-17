from fastapi import APIRouter
import json
from pathlib import Path

router = APIRouter()

DATA_FILE = Path(__file__).parent.parent / "data" / "villages.json"

@router.get("/villages")
def get_villages():
    with open(DATA_FILE, "r") as file:
        return json.load(file)