import { Progress } from "@/components/ui/progress";

interface ProgressCardProps {
  total: number;
  completed: number;
}

export const ProgressCard = ({ total, completed }: ProgressCardProps) => {
  const percentage = Math.round((completed / total) * 100);

  return (
    <div className="bg-dashboard-teal p-6 rounded-xl text-white shadow-lg">
      <h3 className="text-lg font-semibold mb-1">Test Progress</h3>
      <p className="text-sm opacity-90 mb-4">Track your journey</p>
      
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Completed</span>
          <span>{percentage}%</span>
        </div>
        <Progress
          value={percentage}
          className="bg-dashboard-teal-dark h-2"
          indicatorClassName="bg-white"
        />
        <p className="text-sm opacity-90">
          {completed} of {total} tests completed
        </p>
      </div>
    </div>
  );
};