import { Progress } from "@/components/ui/progress";

interface ProgressCardProps {
  total: number;
  completed: number;
}

export const ProgressCard = ({ total, completed }: ProgressCardProps) => {
  const percentage = Math.round((completed / total) * 100);

  return (
    <div className="bg-dashboard-purple p-6 rounded-xl text-white">
      <h3 className="text-lg font-semibold mb-1">Test Progress</h3>
      <p className="text-sm opacity-80 mb-4">Track your journey</p>
      
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Completed</span>
          <span>{percentage}%</span>
        </div>
        <Progress
          value={percentage}
          className="bg-dashboard-purple-dark h-2"
          indicatorClassName="bg-white"
        />
        <p className="text-sm opacity-80">
          {completed} of {total} tests completed
        </p>
      </div>
    </div>
  );
};