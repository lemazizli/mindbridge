import { LucideIcon, BrainCircuit, UserCheck, Lock, Calendar, BarChart, MessageCircle } from 'lucide-react';

type FeatureCardProps = {
  icon: string;
  title: string;
  desc: string;
};
const icons: Record<string, LucideIcon> = {
  'brain-circuit': BrainCircuit,
  'user-check': UserCheck,
  'lock': Lock,
  'calendar': Calendar,
  'bar-chart': BarChart,
  'message-circle': MessageCircle,
};
export default function FeatureCard({ icon, title, desc }: FeatureCardProps) {
  const Icon = icons[icon] || BrainCircuit;
  return (
    <div className="flex flex-col items-center p-4 rounded-lg shadow-sm bg-white">
      <Icon className="w-10 h-10 mb-2 text-primary" />
      <span className="font-semibold text-md mb-1">{title}</span>
      <span className="text-gray-500 text-sm text-center">{desc}</span>
    </div>
  );
}
