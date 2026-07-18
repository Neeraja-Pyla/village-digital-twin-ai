import pandas as pd
from sklearn.ensemble import RandomForestClassifier
import joblib

data = {
    "population":[12540,8900,15420,7400,16800,11000,9700,18500],
    "households":[3180,2100,4010,1800,4300,2600,2200,4700],
    "temperature":[31,28,26,33,25,30,29,24],
    "risk":[84,52,91,35,88,67,44,95]
}

df = pd.DataFrame(data)

df["label"] = df["risk"].apply(
    lambda x: 2 if x>=80 else 1 if x>=60 else 0
)

X = df[["population","households","temperature","risk"]]
y = df["label"]

model = RandomForestClassifier(
    n_estimators=100,
    random_state=42
)

model.fit(X,y)

joblib.dump(model,"app/ml/model.pkl")

print("Model trained successfully")