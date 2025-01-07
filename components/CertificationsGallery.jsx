'use client';
import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Award, ExternalLink } from 'lucide-react';

const CertificationsGallery = () => {
  const scrollContainerRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const certificates = [
    {
      title: "Google Cloud and AI with Prompt Engineering",
      organization: "Google",
      issueDate: "2024",
      skills: ["Cloud Computing", "AI", "Prompt Engineering"],
      imageUrl: "/api/placeholder/350/200",
      category: "Cloud & AI"
    },
    {
      title: "Google Advanced Data Analytics",
      organization: "Google",
      issueDate: "2024",
      skills: ["Data Analytics", "Machine Learning", "Statistics"],
      imageUrl: "https://raw.githubusercontent.com/manishrramchandani/Portfolio/main/Certificates_jpeg/GoogleAdvancedDataAnalyticsCertificate_Badge20240503-8-2bafqg-page-00001.jpg",
      category: "Data Analytics"
    },
    // ... [Previous certificates remain the same]
    {
      title: "Scholar with Recognition",
      organization: "Academic Achievement",
      issueDate: "2023",
      skills: ["Academic Excellence", "Research", "Scholarship"],
      imageUrl: "https://raw.githubusercontent.com/manishrramchandani/Portfolio/main/Certificates_jpeg/Scholar%20with%20Recognition-page-00001.jpg",
      category: "Academic"
    }
  ];

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const amount = direction === 'left' ? -400 : 400;
      scrollContainerRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white" id="certifications">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Professional Certifications</h2>
            <p className="text-gray-600">Industry-recognized credentials and achievements</p>
          </div>
          
          <div className="flex gap-2 mt-4 md:mt-0">
            <button 
              onClick={() => scroll('left')}
              className="p-2 bg-white rounded-full shadow-md hover:shadow-lg hover:bg-gray-50 transition-all duration-300 border border-gray-100"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-2 bg-white rounded-full shadow-md hover:shadow-lg hover:bg-gray-50 transition-all duration-300 border border-gray-100"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>

        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar"
          style={{ scrollBehavior: 'smooth' }}
        >
          {certificates.map((cert, index) => (
            <div 
              key={index}
              className="flex-none w-[350px] bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden snap-center"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative">
                <div className="relative h-48 bg-gray-50 overflow-hidden">
                  <img
                    src={cert.imageUrl}
                    alt={cert.title}
                    className="w-full h-full object-contain p-4 transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <span className="px-3 py-1 bg-white/90 rounded-full text-sm font-medium text-gray-700">
                      {cert.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 min-h-14">
                    {cert.title}
                  </h3>
                  
                  <div className="flex items-center text-gray-600 text-sm mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Issued {cert.issueDate}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                    <span className="text-sm font-medium text-gray-600">{cert.organization}</span>
                    <button className="flex items-center text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors">
                      <Award className="w-4 h-4 mr-1" />
                      View
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default CertificationsGallery;