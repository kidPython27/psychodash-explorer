import { useToast } from "@/hooks/use-toast";
import { DashboardCard } from "@/components/DashboardCard";
import { TestCard } from "@/components/TestCard";
import { ProgressCard } from "@/components/ProgressCard";
import { Award, Download, TrendingUp, Share2, CreditCard, FileText, Brain, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

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
        {/* Header with User Welcome */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-gray-900">Welcome back, Alex!</h1>
            <p className="text-dashboard-neutral-400">
              Track your psychometric assessment progress
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-dashboard-teal/10 px-4 py-2 rounded-lg">
              <p className="text-sm text-dashboard-teal font-medium">Credits Available: 3</p>
            </div>
            <Button className="bg-dashboard-teal hover:bg-dashboard-teal-dark text-white shadow-sm">
              <CreditCard className="w-4 h-4 mr-2" />
              Buy Credits
            </Button>
          </div>
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
              <div className="flex items-center justify-between p-4 bg-dashboard-neutral-100 rounded-lg border border-dashboard-neutral-200">
                <div className="flex items-center gap-4">
                  <TrendingUp className="w-5 h-5 text-dashboard-teal" />
                  <div>
                    <p className="font-medium text-gray-900">RIASEC Assessment</p>
                    <p className="text-sm text-dashboard-neutral-400">
                      Completed on April 15, 2024
                    </p>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <Download className="w-5 h-5 text-dashboard-neutral-400 hover:text-dashboard-teal transition-colors" />
                </Button>
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

        {/* Cross-selling Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <DashboardCard
            title="Build Your Resume"
            subtitle="Create a professional CV"
            className="bg-gradient-to-br from-white to-dashboard-teal/5 hover:shadow-lg border-2 border-dashboard-teal/20 hover:border-dashboard-teal/40 transition-all"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-dashboard-teal/10 rounded-lg">
                  <FileText className="w-5 h-5 text-dashboard-teal" />
                </div>
                <p className="text-sm text-dashboard-neutral-400">AI-powered resume builder</p>
              </div>
              <Button className="bg-dashboard-teal hover:bg-dashboard-teal-dark text-white shadow-sm">
                Start Now
              </Button>
            </div>
          </DashboardCard>

          <DashboardCard
            title="Interview Prep"
            subtitle="Practice with AI"
            className="bg-gradient-to-br from-white to-dashboard-teal/5 hover:shadow-lg border-2 border-dashboard-teal/20 hover:border-dashboard-teal/40 transition-all"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-dashboard-teal/10 rounded-lg">
                  <Brain className="w-5 h-5 text-dashboard-teal" />
                </div>
                <p className="text-sm text-dashboard-neutral-400">Mock interviews with feedback</p>
              </div>
              <Button className="bg-dashboard-teal hover:bg-dashboard-teal-dark text-white shadow-sm">
                Practice
              </Button>
            </div>
          </DashboardCard>

          <DashboardCard
            title="Aptitude Tests"
            subtitle="Enhance your skills"
            className="bg-gradient-to-br from-white to-dashboard-teal/5 hover:shadow-lg border-2 border-dashboard-teal/20 hover:border-dashboard-teal/40 transition-all"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-dashboard-teal/10 rounded-lg">
                  <BookOpen className="w-5 h-5 text-dashboard-teal" />
                </div>
                <p className="text-sm text-dashboard-neutral-400">Comprehensive test series</p>
              </div>
              <Button className="bg-dashboard-teal hover:bg-dashboard-teal-dark text-white shadow-sm">
                Explore
              </Button>
            </div>
          </DashboardCard>
        </div>

        {/* Premium Features */}
        <DashboardCard
          title="Unlock Premium Features"
          subtitle="Get access to advanced insights and additional tests"
          className="bg-gradient-to-br from-white to-dashboard-teal/5 border border-dashboard-teal/20"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <Award className="w-5 h-5 text-dashboard-teal mt-1" />
              <div>
                <p className="font-medium text-gray-900">Detailed Reports</p>
                <p className="text-sm text-dashboard-neutral-400">
                  Get comprehensive insights
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <TrendingUp className="w-5 h-5 text-dashboard-teal mt-1" />
              <div>
                <p className="font-medium text-gray-900">Progress Tracking</p>
                <p className="text-sm text-dashboard-neutral-400">
                  Monitor your growth
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Share2 className="w-5 h-5 text-dashboard-teal mt-1" />
              <div>
                <p className="font-medium text-gray-900">Share Results</p>
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