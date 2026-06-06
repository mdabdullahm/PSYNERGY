import { CheckCircle2 } from "lucide-react";

const MobileDetail = () => (
  <div className="space-y-4">
    <p className="text-gray-600 leading-relaxed text-lg italic font-medium">
      Bangladesh now has over 130 million internet users, and smartphones are deeply embedded in daily work life.
    </p>
    <p className="text-gray-600">
      Constant notifications, scrolling habits, and digital dependency are increasingly affecting employee focus, productivity, and mental well-being.
    </p>
    <div className="flex gap-3">
      <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={20} />
      <p className="text-gray-600">Equips teams with practical tools to manage mobile addiction.</p>
    </div>
    <div className="flex gap-3">
      <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={20} />
      <p className="text-gray-600">Build healthier, more focused work habits in an always-connected world.</p>
    </div>
  </div>
);
export default MobileDetail;