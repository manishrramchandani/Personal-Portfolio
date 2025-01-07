"use client"
import React, { useState } from 'react';
import { ChevronDown, Building2, Calendar, Target } from 'lucide-react';
import { Card } from '@/components/ui/card';

const ExperienceCard = ({ role, company, duration, description, skills, achievements }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="w-full bg-white hover:shadow-lg transition-all duration-300">
      <div 
        onClick={() => setIsExpanded(!isExpanded)}
        className="p-6 cursor-pointer select-none"
      >
        {/* Header Section */}
        <div className="flex justify-between items-start mb-4">
          <div className="space-y-1">
            <h3 className="text-xl font-semibold text-gray-900">{role}</h3>
            <div className="flex items-center text-gray-600">
              <Building2 size={18} className="mr-2" />
              <span>{company}</span>
            </div>
            <div className="flex items-center text-gray-500 text-sm">
              <Calendar size={16} className="mr-2" />
              <span>{duration}</span>
            </div>
          </div>
          <ChevronDown 
            className={`transform transition-transform duration-300 text-gray-400
              ${isExpanded ? 'rotate-180' : ''}`} 
            size={24} 
          />
        </div>

        {/* Preview Text */}
        <p className={`text-gray-600 line-clamp-2 ${isExpanded ? 'hidden' : 'block'}`}>
          {description}
        </p>

        {/* Expanded Content */}
        <div className={`space-y-6 ${isExpanded ? 'block animate-in fade-in-50 duration-500' : 'hidden'}`}>
          {/* Full Description */}
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Role Overview</h4>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>

          {/* Key Achievements */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Key Achievements</h4>
            <ul className="space-y-2">
              {achievements.map((achievement, index) => (
                <li 
                  key={index} 
                  className="flex items-start space-x-3 text-gray-600"
                >
                  <Target size={18} className="text-blue-500 mt-1 flex-shrink-0" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills Used */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Skills & Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

const Experience = () => {
  const experiences = [
    {
      role: "Associate Data Scientist",
      company: "Kais Associates",
      duration: "August 2024 - Present",
      description: "Leading data science initiatives focused on predictive modeling and market analysis for the hospitality sector, developing and implementing machine learning solutions for business optimization.",
      achievements: [
        "Developed Python-based predictive models for occupancy rates and pricing optimization, boosting RevPAR by 17% on weekdays",
        "Conducted market analysis and A/B testing for branding strategies of motel chains like Quality Inn and Motel 6",
        "Presented data-driven insights using Tableau for brand enhancement and sales growth strategies",
        "Implemented TensorFlow-based sentiment analysis on customer reviews to improve service quality"
      ],
      skills: ["Python", "TensorFlow", "Tableau", "SQL", "A/B Testing", "Predictive Modeling", "Market Analysis"]
    },
    {
      role: "Business Intelligence Analyst",
      company: "University of Texas at Dallas",
      duration: "February 2024 - May 2024",
      description: "Managed and optimized database systems while implementing automated workflows to enhance operational efficiency and data accuracy.",
      achievements: [
        "Optimized databases using SQL, improving operational efficiency and information accuracy by 2%",
        "Automated data processing workflows, increasing operational speed by 150%",
        "Managed database and application form systems, enhancing project completion rates"
      ],
      skills: ["SQL", "Data Analysis", "Process Automation", "Database Management", "Business Intelligence"]
    },
    {
      role: "Data Analyst",
      company: "Thirty More Chronicles",
      duration: "May 2020 - June 2022",
      description: "Led data analysis initiatives focusing on operational efficiency, customer retention, and marketing optimization through advanced analytics and visualization techniques.",
      achievements: [
        "Managed weekly reporting with Tableau visualization and Alteryx, providing actionable insights backed by statistical analysis to senior management resulting in 12% increase in operational efficiency",
        "Analyzed marketing campaigns using scikit-learn and seaborn to improve customer retention by 6%",
        "Collaborated with marketing teams, identifying customer segmentation based on clusters for better pricing offers based on Machine Learning methodologies on pin codes contributing to $43,000 annual cost savings",
        "Leveraged SaaS-based customer interaction platform Foster Reads to implement propensity modeling, refining user engagement KPIs that led to UX overhaul using A/B testing, increasing session duration by 20%"
      ],
      skills: ["Tableau", "Alteryx", "Python", "scikit-learn", "seaborn", "Machine Learning", "A/B Testing", "Statistical Analysis", "Customer Segmentation"]
    }
  ];

  return (
    <section id="experience" className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A track record of delivering impactful solutions in data science and business intelligence,
            driving innovation and efficiency through data-driven approaches.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;