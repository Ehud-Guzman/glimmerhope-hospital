import React from "react";

// feature: string key from features.json
// children: the component(s) to render if enabled
export default function FeatureGate({ feature, children }) {
  const features = JSON.parse(localStorage.getItem("ACTIVE_FEATURES")); // optional dynamic
  const isEnabled = features ? features[feature] : true; // default true for dev

  if (!isEnabled) {
    return (
      <div className="py-24 text-center text-gray-500">
        <h2 className="text-xl font-semibold">
          Feature "{feature}" is not available in your current plan.
        </h2>
      </div>
    );
  }

  return <>{children}</>;
}
