import { CheckCircle2 } from "lucide-react";

const SubstanceDetail = () => (
  <div className="space-y-4">
    <p className="text-gray-600 leading-relaxed text-lg italic font-medium">
      Approximately 8.3 million people in Bangladesh are affected by drug addiction.
    </p>
    <p className="text-gray-600">
      Substance abuse creates significant challenges for employee health, safety, and productivity within organizations.
    </p>
    <div className="flex gap-3">
      <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={20} />
      <p className="text-gray-600">Recognize risk factors and support affected individuals.</p>
    </div>
    <div className="flex gap-3">
      <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={20} />
      <p className="text-gray-600">Promote a healthier, safer, and more productive work environment.</p>
    </div>
  </div>
);
export default SubstanceDetail;