import { useToast } from "@/hooks/use-toast";
import { DashboardCard } from "@/components/DashboardCard";
import { TestCard } from "@/components/TestCard";
import { ProgressCard } from "@/components/ProgressCard";
import { Award, Download, TrendingUp } from "lucide-react";

const Index = () => {
  const { toast } = useToast();

  const handleShare = () => {
    toast({
      title: "Share Link Generated",
      description: "Report link has been copied to clipboard",
    });
  };

  const handleStart = (testName: string) => {
    toast({
      title: "Starting Test",
      description: `Preparing ${testName} assessment...`,
    });
  };

  return (
    <div className="min-h-screen bg-dashboard-neutral-100 p-6 sm:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-dashboard-neutral-400">
            Track your psychometric assessment progress
          </p>
        </div>

        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ProgressCard total={2} completed={1} />
          
          <DashboardCard
            title="Latest Results"
            subtitle="Your most recent test scores"
            className="md:col-span-2"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-dashboard-neutral-100 rounded-lg">
                <div className="flex items-center gap-4">
                  <TrendingUp className="w-5 h-5 text-dashboard-purple" />
                  <div>
                    <p className="font-medium">RIASEC Assessment</p>
                    <p className="text-sm text-dashboard-neutral-400">
                      Completed on April 15, 2024
                    </p>
                  </div>
                </div>
                <Download className="w-5 h-5 text-dashboard-neutral-400 cursor-pointer hover:text-dashboard-purple transition-colors" />
              </div>
            </div>
          </DashboardCard>
        </div>

        {/* Available Tests */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-900">Available Tests</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TestCard
              title="RIASEC Assessment"
              description="Discover your career interests and preferences"
              duration="20-25 minutes"
              isCompleted={true}
              onStart={() => handleStart("RIASEC")}
              onShare={handleShare}
            />
            <TestCard
              title="Big Five Personality"
              description="Understand your personality dimensions"
              duration="15-20 minutes"
              isPremium={true}
              onStart={() => handleStart("Big Five")}
            />
          </div>
        </div>

        {/* Premium Features */}
        <DashboardCard
          title="Unlock Premium Features"
          subtitle="Get access to advanced insights and additional tests"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <Award className="w-5 h-5 text-dashboard-purple mt-1" />
              <div>
                <p className="font-medium">Detailed Reports</p>
                <p className="text-sm text-dashboard-neutral-400">
                  Get comprehensive insights
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <TrendingUp className="w-5 h-5 text-dashboard-purple mt-1" />
              <div>
                <p className="font-medium">Progress Tracking</p>
                <p className="text-sm text-dashboard-neutral-400">
                  Monitor your growth
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Share2 className="w-5 h-5 text-dashboard-purple mt-1" />
              <div>
                <p className="font-medium">Share Results</p>
                <p className="text-sm text-dashboard-neutral-400">
                  Export and share reports
                </p>
              </div>
            </div>
          </div>
        </DashboardCard>
      </div>
    </div>
  );
};

export default Index;