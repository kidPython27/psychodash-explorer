import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Upload, FileText, Brain, Briefcase, Code, Download, ChevronDown } from "lucide-react";

export const ResumeBuilder = () => {
  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Build Your Resume</h1>
            <p className="text-gray-500 mt-1">Create a professional resume in minutes</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="gap-2">
              <FileText className="w-4 h-4" />
              Change Template
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white gap-2">
              <Download className="w-4 h-4" />
              Download PDF
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Build Tools */}
          <div className="space-y-6">
            {/* Build from File Section */}
            <Card className="border border-gray-200 shadow-sm">
              <CardHeader className="border-b border-gray-100 bg-gray-50">
                <CardTitle className="text-xl font-semibold">Build from File</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="flex-1 relative">
                    <Button 
                      variant="outline" 
                      className="w-full justify-between text-gray-500 font-normal"
                    >
                      Select Resume File
                      <ChevronDown className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                  <Button className="bg-blue-50 text-blue-600 hover:bg-blue-100 gap-2">
                    <Upload className="w-4 h-4" />
                    Upload New File
                  </Button>
                </div>

                {/* Build Tools Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { title: "Build Structure", color: "text-green-600" },
                    { title: "Build Work Bullets", color: "text-green-600" },
                    { title: "Summarize Roles", color: "text-green-600" },
                    { title: "Build Summary", color: "text-green-600" },
                    { title: "Build Core Skills", color: "text-green-600" },
                    { title: "Build Computer Skills", color: "text-green-600" },
                  ].map((tool, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className={`h-auto py-3 px-4 justify-start font-normal ${tool.color} border-gray-200 hover:border-green-600 hover:bg-green-50`}
                    >
                      {tool.title}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* JD Alignment Section */}
            <Card className="border border-gray-200 shadow-sm">
              <CardHeader className="border-b border-gray-100 bg-gray-50">
                <CardTitle className="text-xl font-semibold">Align Summary with JD File</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex-1 relative">
                    <Button 
                      variant="outline" 
                      className="w-full justify-between text-gray-500 font-normal"
                    >
                      Select JD File
                      <ChevronDown className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                  <Button className="bg-blue-50 text-blue-600 hover:bg-blue-100 gap-2">
                    <Upload className="w-4 h-4" />
                    Upload New File
                  </Button>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  Build Summary
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Preview */}
          <Card className="lg:sticky lg:top-6 h-[calc(100vh-8rem)] overflow-auto border border-gray-200 shadow-sm">
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
