import { CheckCircle2 } from "lucide-react";

const WorkplaceWellbeing = () => (
  <div className="space-y-4">
    <p className="text-gray-600 leading-relaxed text-lg">
      Mental health is key to a productive and engaged workforce.
    </p>
    <div className="space-y-3">
      <div className="flex gap-3">
        <CheckCircle2 className="text-green-600 shrink-0 mt-1" size={20} />
        <p className="text-gray-600">Identify workplace stress, burnout, and emotional challenges.</p>
      </div>
      <div className="flex gap-3">
        <CheckCircle2 className="text-green-600 shrink-0 mt-1" size={20} />
        <p className="text-gray-600">Promote mental well-being and foster resilience.</p>
      </div>
    </div>
    <p className="text-gray-600">Create a supportive, healthy work environment for everyone to improve performance.</p>
  </div>
);
export default WorkplaceWellbeing;