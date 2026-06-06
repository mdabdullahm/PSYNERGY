import { CheckCircle2 } from "lucide-react";

const DigitalDetail = () => (
  <div className="space-y-4">
    <p className="text-gray-600 leading-relaxed text-lg italic font-medium">
      Excessive internet use and social media overuse are growing challenges in modern workplaces.
    </p>
    <p className="text-gray-600">
      This training covers problematic online behaviors—including social media dependency—which affect employee focus and overall well-being.
    </p>
    <div className="flex gap-3">
      <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={20} />
      <p className="text-gray-600">Evidence-based strategies to strengthen self-regulation.</p>
    </div>
    <div className="flex gap-3">
      <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={20} />
      <p className="text-gray-600">Practical tools to manage digital addiction and build focus.</p>
    </div>
  </div>
);
export default DigitalDetail;