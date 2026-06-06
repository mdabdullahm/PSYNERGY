import { CheckCircle2 } from "lucide-react";

const EAP = () => (
  <div className="space-y-4">
    <p className="text-gray-600 leading-relaxed text-lg">
      Supporting employees means supporting the organization through confidential counseling.
    </p>
    <div className="space-y-3">
      <div className="flex gap-3">
        <CheckCircle2 className="text-red-600 shrink-0 mt-1" size={20} />
        <p className="text-gray-600">Confidential support for personal and work-related challenges.</p>
      </div>
      <div className="flex gap-3">
        <CheckCircle2 className="text-red-600 shrink-0 mt-1" size={20} />
        <p className="text-gray-600">Reduces workplace stress and enhances overall engagement.</p>
      </div>
    </div>
    <p className="text-gray-600">Equip teams with timely support to handle life events and conflicts effectively.</p>
  </div>
);
export default EAP;