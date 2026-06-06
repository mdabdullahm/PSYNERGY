import { CheckCircle2 } from "lucide-react";

const MentalHealthCounselling = () => (
  <div className="space-y-4">
    <p className="text-gray-600 leading-relaxed text-lg italic font-medium">
      Supporting mental well-being is essential for a thriving workforce.
    </p>
    <p className="text-gray-600">
      Mental Health Counselling provides employees with confidential, evidence-based support to address stress, anxiety, depression, and other emotional challenges.
    </p>
    <div className="space-y-3">
      <div className="flex gap-3">
        <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={20} />
        <p className="text-gray-600">Help individuals build coping skills and improve mental resilience.</p>
      </div>
      <div className="flex gap-3">
        <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={20} />
        <p className="text-gray-600">Maintain a healthier balance between work and life for better engagement.</p>
      </div>
    </div>
  </div>
);
export default MentalHealthCounselling;