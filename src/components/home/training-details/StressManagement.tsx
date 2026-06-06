import { CheckCircle2 } from "lucide-react";

const StressManagement = () => (
  <div className="space-y-4">
    <p className="text-gray-600 leading-relaxed text-lg">
      Workplace stress and anxiety are growing challenges that impact focus and team morale.
    </p>
    <div className="space-y-3">
      <div className="flex gap-3">
        <CheckCircle2 className="text-orange-600 shrink-0 mt-1" size={20} />
        <p className="text-gray-600">Identify stress triggers and manage anxiety effectively.</p>
      </div>
      <div className="flex gap-3">
        <CheckCircle2 className="text-orange-600 shrink-0 mt-1" size={20} />
        <p className="text-gray-600">Actionable techniques to stay calm under pressure.</p>
      </div>
    </div>
    <p className="text-gray-600">Maintain productivity and create a more supportive team environment.</p>
  </div>
);
export default StressManagement;