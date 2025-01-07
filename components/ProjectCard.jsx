"use client"
import React, { useState } from 'react';
import { ChevronDown, Github, Database, Target, Globe } from 'lucide-react';

const ProjectCard = ({ title, description, technologies, achievements }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className="w-full bg-white shadow-md hover:shadow-lg transition-all duration-300 rounded-lg cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="space-y-1">
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            <div className="flex items-center text-gray-500 text-sm">
              <Globe className="w-4 h-4 mr-2" />
              <span>Personal Project</span>
            </div>
          </div>
          <ChevronDown 
            className={`transform transition-transform duration-300 text-gray-400
              ${isExpanded ? 'rotate-180' : ''}`}
            size={24} 
          />
        </div>

        {!isExpanded && (
          <p className="text-gray-600 line-clamp-2">{description}</p>
        )}

        {isExpanded && (
          <div className="space-y-6 animate-in fade-in-50 duration-500">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Project Overview</h4>
              <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-3">Key Features & Achievements</h4>
              <ul className="space-y-2">
                {achievements.map((achievement, index) => (
                  <li 
                    key={index} 
                    className="flex items-start space-x-3 text-gray-600"
                  >
                    <Target className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Portfolio Website",
      description: "Developed a personal portfolio website leveraging AI capabilities through Claude MCP, integrating with GitHub and Brave API to streamline development without prior computer science experience.",
      achievements: [
        "Built a responsive portfolio website using HTML and CSS from scratch",
        "Implemented AI agent integration with filesystem access through GitHub tokens",
        "Leveraged Brave API for enhanced functionality and search capabilities",
        "Automated development workflows using Claude MCP for efficient code generation"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Claude AI", "GitHub API", "Brave API", "Next.js"]
    },
    {
      title: "UTD Data Platform Architecture",
      description: "Designed and implemented a comprehensive cloud-based data platform for the University of Texas at Dallas, enabling unified data sharing, analytics, and machine learning capabilities.",
      achievements: [
        "Architected hybrid cloud solution combining on-premises and AWS services",
        "Implemented secure data ingestion and storage systems with encryption",
        "Integrated analytics tools including Redshift, Athena, and SageMaker",
        "Developed phased implementation roadmap for $3.1M annual infrastructure",
        "Enhanced student success tracking and alumni engagement through predictive modeling"
      ],
      technologies: ["AWS", "Redshift", "Athena", "SageMaker", "Cloud Architecture", "Data Engineering", "Machine Learning"]
    },
    {
      title: "Conagra Brand Market Analysis",
      description: "Led a winning hackathon project analyzing market trends and sales data for Conagra's margarine category, providing strategic insights for portfolio optimization.",
      achievements: [
        "Secured first prize in the Conagra Brand Hackathon",
        "Identified correlation patterns between Earth Balance and Smart Balance sales",
        "Recommended new product opportunities for Parkay and Blue Bonnet 30oz tubs",
        "Analyzed merchandising effectiveness in premium segment",
        "Developed targeting strategy for lactose-intolerant demographic"
      ],
      technologies: ["Python", "Predictive Analytics", "Machine Learning", "Data Visualization", "Market Analysis", "Statistical Modeling"]
    }
  ];

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A showcase of technical projects demonstrating expertise in data science, cloud architecture, 
            and web development, with a focus on innovative solutions and measurable impact.
          </p>
        </div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;