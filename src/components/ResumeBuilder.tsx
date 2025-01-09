import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Upload, FileText, Brain, Briefcase, Code, Download } from "lucide-react";

export const ResumeBuilder = () => {
  return (
    <div className="min-h-screen bg-dashboard-neutral-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Build Your Resume</h1>
            <p className="text-dashboard-neutral-400 mt-2">Create a professional resume in minutes</p>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" className="gap-2">
              <FileText className="w-4 h-4" />
              Change Template
            </Button>
            <Button className="bg-dashboard-teal-dark hover:bg-dashboard-teal gap-2">
              <Download className="w-4 h-4" />
              Download PDF
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column - Build Tools */}
          <div className="space-y-6">
            {/* File Upload Card */}
            <Card className="border-2 border-dashed border-dashboard-neutral-300 hover:border-dashboard-teal transition-colors">
              <CardContent className="p-6">
                <div className="flex flex-col items-center justify-center space-y-4">
                  <Upload className="w-12 h-12 text-dashboard-teal" />
                  <div className="text-center">
                    <h3 className="font-semibold mb-2">Select Resume File</h3>
                    <p className="text-sm text-dashboard-neutral-400 mb-4">
                      Upload your existing resume or start from scratch
                    </p>
                    <Button variant="outline" className="gap-2">
                      <Upload className="w-4 h-4" />
                      Upload New File
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Build Tools Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: FileText, title: "Build Structure", color: "bg-blue-50" },
                { icon: Briefcase, title: "Build Work Bullets", color: "bg-green-50" },
                { icon: Brain, title: "Summarize Roles", color: "bg-purple-50" },
                { icon: FileText, title: "Build Summary", color: "bg-yellow-50" },
                { icon: Code, title: "Build Core Skills", color: "bg-pink-50" },
                { icon: Code, title: "Build Computer Skills", color: "bg-indigo-50" },
              ].map((tool, index) => (
                <Card 
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 hover:animate-card-hover cursor-pointer border-transparent hover:border-dashboard-teal"
                >
                  <CardContent className="p-4">
                    <div className={`rounded-lg p-3 ${tool.color} mb-3 w-fit group-hover:bg-dashboard-teal group-hover:text-white transition-colors`}>
                      <tool.icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-medium text-sm">{tool.title}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* JD Alignment Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Align Summary with JD File</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <Input 
                    type="file" 
                    className="flex-1"
                    placeholder="Select JD File"
                  />
                  <Button variant="outline" className="gap-2">
                    <Upload className="w-4 h-4" />
                    Upload New File
                  </Button>
                </div>
                <Button className="w-full bg-dashboard-teal hover:bg-dashboard-teal-dark">
                  Build Summary
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Preview */}
          <Card className="lg:sticky lg:top-6 h-[calc(100vh-8rem)] overflow-auto">
            <CardContent className="p-6">
              <div className="bg-white rounded-lg p-8 shadow-inner min-h-full">
                {/* Resume Header */}
                <div className="text-center mb-12 pb-6 border-b-2 border-dashboard-teal">
                  <h2 className="text-3xl font-bold text-gray-800 mb-3">John Doe</h2>
                  <p className="text-sm text-gray-600">john.doe@example.com | (555) 123-4567 | New York City | USA</p>
                </div>
                
                <div className="space-y-8">
                  {/* Professional Summary */}
                  <section className="mb-8">
                    <h3 className="text-lg font-semibold text-dashboard-teal-dark border-b-2 border-dashboard-neutral-200 pb-2 mb-4">
                      Professional Summary
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Experienced professional with expertise in data analysis and problem-solving. 
                      Proven track record of delivering impactful results through innovative solutions.
                    </p>
                  </section>

                  {/* Core Skills */}
                  <section className="mb-8">
                    <h3 className="text-lg font-semibold text-dashboard-teal-dark border-b-2 border-dashboard-neutral-200 pb-2 mb-4">
                      Core Skills
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Data Analysis & Modeling</li>
                        <li>Python Programming</li>
                        <li>Problem-Solving</li>
                      </ul>
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>MS Excel & Office Suite</li>
                        <li>Process Simulation</li>
                        <li>Time Management</li>
                      </ul>
                    </div>
                  </section>

                  {/* Work Experience */}
                  <section className="mb-8">
                    <h3 className="text-lg font-semibold text-dashboard-teal-dark border-b-2 border-dashboard-neutral-200 pb-2 mb-4">
                      Work Experience
                    </h3>
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-medium text-gray-800">Senior Data Analyst</h4>
                          <span className="text-sm text-dashboard-neutral-400">2020 - Present</span>
                        </div>
                        <p className="text-dashboard-teal mb-2 text-sm">Tech Solutions Inc., New York</p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
                          <li>Led data analysis projects resulting in 30% efficiency improvement</li>
                          <li>Developed automated reporting systems using Python and SQL</li>
                          <li>Mentored junior analysts and conducted training sessions</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* Education */}
                  <section className="mb-8">
                    <h3 className="text-lg font-semibold text-dashboard-teal-dark border-b-2 border-dashboard-neutral-200 pb-2 mb-4">
                      Education
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <h4 className="font-medium text-gray-800">Master of Science in Data Analytics</h4>
                          <span className="text-sm text-dashboard-neutral-400">2018 - 2020</span>
                        </div>
                        <p className="text-dashboard-teal text-sm">University of Technology</p>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;