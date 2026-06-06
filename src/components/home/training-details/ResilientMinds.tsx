import { CheckCircle2 } from "lucide-react";

const ResilientMinds = () => (
  <div className="space-y-4">
    <p className="text-gray-600 leading-relaxed text-lg">
      Resilient employees build resilient organizations. Focus on strengthening mental toughness.
    </p>
    <div className="space-y-3">
      <div className="flex gap-3">
        <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={20} />
        <p className="text-gray-600">Strengthening resilience at individual and team levels.</p>
      </div>
      <div className="flex gap-3">
        <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={20} />
        <p className="text-gray-600">Strategies to recover from setbacks and adapt to change.</p>
      </div>
    </div>
    <p className="text-gray-600">Cultivate a positive workplace culture that drives long-term organizational success.</p>
  </div>
);
export default ResilientMinds;