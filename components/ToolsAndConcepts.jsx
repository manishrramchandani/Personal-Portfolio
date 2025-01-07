'use client'
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const SkillTag = ({ children }) => (
  <span className="bg-gray-100 text-gray-900 px-3 py-1.5 rounded-full text-xs font-normal 
    transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-105 cursor-default">
    {children}
  </span>
);

const Tab = ({ title, categories }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-3 bg-white rounded-xl transition-all duration-300 hover:bg-gray-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex justify-between items-center cursor-pointer"
      >
        <h3 className="text-lg font-medium" id='skills'>{title}</h3>
        <ChevronDown
          className={`text-blue-600 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          size={20}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="px-6 pb-6">
          {categories.map((category) => (
            <div key={category.title} className="mb-6 last:mb-0">
              <h4 className="text-sm font-medium mb-3 text-gray-900">
                {category.title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <SkillTag key={skill}>{skill}</SkillTag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ToolsAndConcepts = () => {
  const sections = [
    {
      title: 'Cloud & Infrastructure',
      categories: [
        {
          title: 'Cloud Platforms',
          skills: ['Google Cloud Platform', 'AWS'],
        },
        {
          title: 'Big Data',
          skills: ['Hadoop', 'Spark', 'Hive'],
        },
      ],
    },
    {
      title: 'Data & Analytics',
      categories: [
        {
          title: 'Analysis Tools',
          skills: ['Python', 'SQL Server', 'Tableau', 'Alteryx', 'SAS'],
        },
      ],
    },
    {
      title: 'AI & Machine Learning',
      categories: [
        {
          title: 'AI Technologies',
          skills: [
            'Claude AI',
            'LLMs',
            'Generative AI',
            'Machine Learning',
            'Prompt Engineering',
          ],
        },
      ],
    },
    {
      title: 'Microsoft Suite',
      categories: [
        {
          title: 'Office Applications',
          skills: ['MS Excel', 'MS Access', 'MS PowerPoint', 'MS Word'],
        },
      ],
    },
  ];

  return (
    <>
    <section className="max-w-3xl mx-auto px-6 py-8" >
      <h2 className="text-3xl font-semibold text-center mb-8 leading-tight tracking-tight" id='skills'>
        Tools & Concepts
      </h2>
      {sections.map((section) => (
        <Tab
          key={section.title}
          title={section.title}
          categories={section.categories}
        />
      ))}
    </section>
    <div id='contact'></div>
    </>
  );
};

export default ToolsAndConcepts;
