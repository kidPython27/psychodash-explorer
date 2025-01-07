import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface Test {
  id: string;
  name: string;
  description: string;
  credits: number;
  image: string;
}

const tests: Test[] = [
  {
    id: "riasec",
    name: "RIASEC Assessment",
    description: "Discover your career interests and preferences based on Holland's theory of career choice",
    credits: 2,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  {
    id: "big5",
    name: "Big Five Personality",
    description: "Understand your personality dimensions: Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism",
    credits: 3,
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
  },
  {
    id: "burnout",
    name: "Burnout Assessment",
    description: "Evaluate your stress levels and identify potential burnout risks in your professional life",
    credits: 2,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  },
];

const Tests = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();

  const filteredTests = tests.filter((test) =>
    test.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    test.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleBuyTest = (test: Test) => {
    toast({
      title: "Processing Purchase",
      description: `Initiating purchase for ${test.name} (${test.credits} credits)`,
    });
  };

  return (
    <div className="min-h-screen bg-dashboard-neutral-100 p-6 sm:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-gray-900">Available Tests</h1>
          <p className="text-dashboard-neutral-400">
            Explore our collection of psychometric assessments
          </p>
          
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-dashboard-neutral-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search tests..."
              className="pl-10 bg-white border-dashboard-neutral-200 focus:border-dashboard-teal"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Test Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTests.map((test) => (
            <div
              key={test.id}
              className="bg-white rounded-xl overflow-hidden border border-dashboard-neutral-200 hover:border-dashboard-teal transition-all duration-300 shadow-sm hover:shadow-md group"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={test.image}
                  alt={test.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {test.name}
                  </h3>
                  <p className="text-dashboard-neutral-400 text-sm">
                    {test.description}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="bg-dashboard-teal/10 px-4 py-2 rounded-lg">
                    <p className="text-dashboard-teal font-medium">
                      {test.credits} Credits
                    </p>
                  </div>
                  <Button
                    onClick={() => handleBuyTest(test)}
                    className="bg-dashboard-teal hover:bg-dashboard-teal-dark text-white shadow-sm"
                  >
                    Buy Test
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tests;