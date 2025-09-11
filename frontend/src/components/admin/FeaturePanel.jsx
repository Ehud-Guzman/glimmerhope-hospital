import { useState } from "react";
import featuresData from "../features.json";

export default function FeaturePanel({ setActiveFeatures }) {
  const [tier, setTier] = useState("basic");
  const [features, setFeatures] = useState(featuresData[tier]);

  const handleTierChange = (e) => {
    const selectedTier = e.target.value;
    setTier(selectedTier);
    const newFeatures = featuresData[selectedTier];
    setFeatures(newFeatures);
    setActiveFeatures(newFeatures);
  };

  const toggleFeature = (feature) => {
    let updated;
    if (typeof features[feature] === "boolean") {
      updated = { ...features, [feature]: !features[feature] };
    } else if (typeof features[feature] === "string") {
      // cycle through multi-state
      const states = ["false", "request", "full"];
      const currentIndex = states.indexOf(features[feature].toString());
      const nextState = states[(currentIndex + 1) % states.length];
      updated = { ...features, [feature]: nextState === "false" ? false : nextState };
    }
    setFeatures(updated);
    setActiveFeatures(updated);
  };

  return (
    <div className="p-4 bg-gray-100 rounded shadow-md space-y-4">
      <h2 className="text-lg font-bold">Feature Panel</h2>

      <div>
        <label className="mr-2">Select Tier:</label>
        <select value={tier} onChange={handleTierChange}>
          {Object.keys(featuresData).map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        {Object.keys(features).map((f) => (
          <div key={f} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={features[f] === true || features[f] === "full"}
              onChange={() => toggleFeature(f)}
            />
            <span>{f} : {features[f].toString()}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
