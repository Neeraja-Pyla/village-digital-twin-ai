function RiskScoreCard() {
  return (
    <div className="bg-red-900 rounded-xl p-6 shadow-lg">
      <h2 className="text-xl font-bold text-white">
        Village Risk Score
      </h2>

      <p className="text-6xl font-bold mt-6 text-white">
        84
      </p>

      <p className="mt-2 text-red-200">
        High Risk
      </p>
    </div>
  );
}

export default RiskScoreCard;