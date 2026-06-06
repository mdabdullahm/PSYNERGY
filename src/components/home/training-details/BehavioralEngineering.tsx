import { CheckCircle2 } from "lucide-react";

const BehavioralEngineering = () => (
  <div className="space-y-4">
    <p className="text-gray-600 leading-relaxed text-lg">
      Small changes in behavior can lead to big results through Choice Architecture.
    </p>
    <div className="space-y-3">
      <div className="flex gap-3">
        <CheckCircle2 className="text-purple-600 shrink-0 mt-1" size={20} />
        <p className="text-gray-600">Design environments that guide better decisions ethically.</p>
      </div>
      <div className="flex gap-3">
        <CheckCircle2 className="text-purple-600 shrink-0 mt-1" size={20} />
        <p className="text-gray-600">Foster positive workplace habits and enhance engagement.</p>
      </div>
    </div>
    <p className="text-gray-600">Create a workplace that naturally encourages smarter choices and improved productivity.</p>
  </div>
);
export default BehavioralEngineering;