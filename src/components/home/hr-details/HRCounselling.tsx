import { CheckCircle2 } from "lucide-react";

const HRCounselling = () => (
  <div className="space-y-4">
    <p className="text-gray-600 leading-relaxed text-lg italic font-medium">
      Effective support starts with understanding people.
    </p>
    <p className="text-gray-600">
      Human Resource Counselling equips HR professionals with the skills to address employee concerns, mediate conflicts, and provide guidance on personal and work-related challenges.
    </p>
    <div className="space-y-3">
      <div className="flex gap-3">
        <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={20} />
        <p className="text-gray-600">Foster a supportive work environment and improve employee satisfaction.</p>
      </div>
      <div className="flex gap-3">
        <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={20} />
        <p className="text-gray-600">Enhance overall productivity through timely, empathetic, and confidential support.</p>
      </div>
    </div>
  </div>
);
export default HRCounselling;