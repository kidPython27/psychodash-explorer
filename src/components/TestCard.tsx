import { Button } from "@/components/ui/button";
import { Clock, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestCardProps {
  title: string;
  description: string;
  duration: string;
  isPremium?: boolean;
  isCompleted?: boolean;
  onStart?: () => void;
  onShare?: () => void;
}

export const TestCard = ({
  title,
  description,
  duration,
  isPremium = false,
  isCompleted = false,
  onStart,
  onShare,
}: TestCardProps) => {
  return (
    <div className="bg-white rounded-xl p-6 border border-dashboard-neutral-200 hover:border-dashboard-purple transition-all duration-300">
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            {isPremium && (
              <span className="px-2 py-1 bg-dashboard-purple-light text-dashboard-purple text-xs font-medium rounded-full">
                Premium
              </span>
            )}
          </div>
          <p className="text-sm text-dashboard-neutral-400 mt-1">{description}</p>
        </div>
      </div>
      
      <div className="flex items-center gap-2 mb-6">
        <Clock className="w-4 h-4 text-dashboard-neutral-400" />
        <span className="text-sm text-dashboard-neutral-400">{duration}</span>
      </div>
      
      <div className="flex items-center gap-3">
        <Button
          onClick={onStart}
          className={cn(
            "flex-1",
            isCompleted
              ? "bg-dashboard-neutral-200 hover:bg-dashboard-neutral-300 text-gray-700"
              : "bg-dashboard-purple hover:bg-dashboard-purple-dark text-white"
          )}
        >
          {isCompleted ? "Retake Test" : "Start Test"}
        </Button>
        {isCompleted && (
          <Button
            variant="outline"
            size="icon"
            onClick={onShare}
            className="border-dashboard-neutral-200 hover:border-dashboard-purple"
          >
            <Share2 className="w-4 h-4" />
          </Button>
        )}
      </div>
    </div>
  );
};