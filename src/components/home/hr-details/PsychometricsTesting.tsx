import { CheckCircle2 } from "lucide-react";

const PsychometricsTesting = () => (
  <div className="space-y-4">
    <p className="text-gray-600 leading-relaxed text-lg italic font-medium">
      Unlock the potential of your workforce with data-driven insights.
    </p>
    <p className="text-gray-600">
      Psychometrics Testing for HR helps organizations assess employees’ personality traits, cognitive abilities, and behavioral tendencies to make informed decisions.
    </p>
    <div className="space-y-3">
      <div className="flex gap-3">
        <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={20} />
        <p className="text-gray-600">Identify strengths and predict performance in recruitment and development.</p>
      </div>
      <div className="flex gap-3">
        <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={20} />
        <p className="text-gray-600">Enhance team dynamics and align talent with organizational goals.</p>
      </div>
    </div>
  </div>
);
export default PsychometricsTesting;