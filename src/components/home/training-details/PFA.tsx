import { CheckCircle2 } from "lucide-react";

const PFA = () => (
  <div className="space-y-4">
    <p className="text-gray-600 leading-relaxed text-lg">
      Psychological First Aid (PFA) training equips individuals to support people experiencing distress during crises or traumatic events.
    </p>
    <div className="flex gap-4">
      <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={20} />
      <p className="text-gray-600 italic">Provides practical, hands-on skills to reduce panic and stabilize emotions.</p>
    </div>
    <div className="flex gap-4">
      <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={20} />
      <p className="text-gray-600 italic">Connects affected individuals to appropriate support and resources.</p>
    </div>
    <p className="text-gray-600">This training ensures teams are prepared to respond calmly and effectively when help is needed the most.</p>
  </div>
);
export default PFA;