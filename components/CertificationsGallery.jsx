'use client';
import Link from 'next/link';

import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Award, ExternalLink, X } from 'lucide-react';

const CertificationsGallery = () => {
  const scrollContainerRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    {
      title: "Google Cloud and AI with Prompt Engineering",
      organization: "Google",
      issueDate: "2024",
      skills: ["Cloud Computing", "AI", "Prompt Engineering", "Machine Learning", "Natural Language Processing"],
      imageUrl: "/client_certs/PngItem_190554.png",
      category: "Cloud Computing & AI",
      description: "This certification demonstrates proficiency in Google Cloud technologies, AI, and prompt engineering techniques, empowering professionals to optimize machine learning models and NLP applications."
    },
    {
      title: "Google Advanced Data Analytics",
      organization: "Google",
      issueDate: "2024",
      skills: ["Data Analytics", "Machine Learning", "Statistics", "Predictive Analytics", "Big Data"],
      imageUrl: "/client_certs/GoogleAdvancedDataAnalyticsCertificate_Badge20240503-8-2bafqg-page-00001.jpg",
      category: "Data Analytics",
      description: "This certification showcases advanced skills in data analytics, focusing on machine learning, predictive analytics, and statistical analysis techniques for large datasets."
    },
    {
      title: "Scholar with Recognition",
      organization: "Academic Achievement",
      issueDate: "2023",
      skills: ["Academic Excellence", "Research", "Scholarship", "Writing", "Publications"],
      imageUrl: "/client_certs/Scholar with Recognition-page-00001.jpg",
      category: "Academic Achievement",
      description: "This recognition highlights outstanding academic performance, significant research contributions, and publication achievements in the field of study."
    },
    {
      title: "Alteryx Designer Core Micro Credential",
      organization: "Alteryx",
      issueDate: "2024",
      skills: ["Cloud Architecture", "AWS Services", "Scalability", "Data Engineering", "Data Integration"],
      imageUrl: "/client_certs/Alteryx_Designer_Core_Micro_Credential__General_Knowledge_Badge20240409-37-gtpsve-page-00001.jpg",
      category: "Cloud Computing & Data Engineering",
      description: "This certification validates expertise in designing distributed systems on AWS, focusing on cloud architecture and scalable data integration solutions."
    },
    {
      title: "Alteryx Foundational Micro Credential Badge",
      organization: "Alteryx",
      issueDate: "2023",
      skills: ["Information Security", "Risk Management", "Cybersecurity", "Compliance", "Data Protection"],
      imageUrl: "/client_certs/Alteryx_Foundational_Micro_Credential_Badge20240409-45-wrao9k-page-00001.jpg",
      category: "Cybersecurity & Risk Management",
      description: "This certification demonstrates foundational knowledge in information security, risk management strategies, and best practices for maintaining cybersecurity compliance."
    },
    {
      title: "AWS Machine Learning",
      organization: "AWS",
      issueDate: "2023",
      skills: ["Machine Learning", "Deep Learning", "TensorFlow", "AI Model Deployment", "Cloud ML"],
      imageUrl: "/client_certs/AWS Machine Learning-page-00001.jpg",
      category: "AI & Machine Learning",
      description: "This certification showcases proficiency in building and training neural networks using TensorFlow on AWS, emphasizing AI model deployment and cloud-based machine learning."
    },
    {
      title: "AWS Academy Graduate",
      organization: "AWS",
      issueDate: "2023",
      skills: ["Kubernetes", "Container Orchestration", "DevOps", "Cloud Computing", "CI/CD"],
      imageUrl: "/client_certs/AWS_Academy_Graduate___AWS_Academy_Data_Engineering_Badge20231130-29-5jmo71-page-00001.jpg",
      category: "DevOps & Cloud Engineering",
      description: "This certification validates skills in deploying and managing Kubernetes clusters, implementing container orchestration, and working with continuous integration and deployment (CI/CD) pipelines."
    },
    {
      title: "Data Bricks Gen AI Fundamental",
      organization: "Data Bricks",
      issueDate: "2021",
      skills: ["Ethical Hacking", "Network Security", "Penetration Testing", "AI Security", "Vulnerability Management"],
      imageUrl: "/client_certs/Data Bricks Gen AI Fundamentals-page-00001.jpg",
      category: "Cybersecurity & AI Security",
      description: "This certification demonstrates expertise in ethical hacking, network security, and penetration testing, with a focus on securing AI systems and identifying vulnerabilities in complex networks."
    },
    {
      title: "Data Science Foundation",
      organization: "Google",
      issueDate: "2024",
      skills: ["Data Visualization", "Business Intelligence", "Analytics", "Tableau", "Data Modeling"],
      imageUrl: "/client_certs/Foundations of Data Science-page-00001.jpg",
      category: "Data Visualization & Analytics",
      description: "This certification showcases proficiency in creating effective data visualizations using Tableau, and applying business intelligence techniques to inform strategic decisions."
    },
    {
      title: "Nuts and Bolts of Machine Learning",
      organization: "Google",
      issueDate: "2024",
      skills: ["Agile Methodologies", "Project Management", "Team Leadership", "Scrum", "ML Model Development"],
      imageUrl: "/client_certs/Nuts and Bolts of Machine Learning-page-00001.jpg",
      category: "Project Management & Machine Learning",
      description: "This certification validates knowledge of Scrum principles, Agile project management, and leading teams in machine learning model development for real-world applications."
    },
    {
      title: "Power of Statistics",
      organization: "Google",
      issueDate: "2024",
      skills: ["Data Science", "Azure ML", "Big Data", "Predictive Analytics", "Statistics Modeling"],
      imageUrl: "/client_certs/Power of Statistics-page-00001.jpg",
      category: "Data Science & Machine Learning",
      description: "This certification demonstrates expertise in applying data science, machine learning techniques, and statistical modeling on Azure, focusing on predictive analytics and big data processing."
    },
    {
      title: "Python Basics",
      organization: "Google",
      issueDate: "2024",
      skills: ["IT Auditing", "Information Systems Control", "Risk Management", "Python Programming", "Security Audits"],
      imageUrl: "/client_certs/Python Basics-page-00001.jpg",
      category: "IT Governance & Python Programming",
      description: "This certification validates skills in auditing and controlling information systems, with a focus on Python programming for automating IT audits and risk management processes."
    },
    {
      title: "Regression Analysis",
      organization: "Google",
      issueDate: "2024",
      skills: ["Apex", "Visualforce", "Lightning Components", "Salesforce", "CRM Development"],
      imageUrl: "/client_certs/Regression Analysis-page-00001.jpg",
      category: "CRM Development & Salesforce",
      description: "This certification showcases proficiency in applying regression analysis techniques to develop custom applications on the Salesforce platform, focusing on Apex, Visualforce, and Lightning Components."
    },
    {
      title: "RPA Business Analyst",
      organization: "UI Path",
      issueDate: "2018",
      skills: ["Network Security", "Compliance", "Operational Security", "Automation", "Robotic Process Automation"],
      imageUrl: "/client_certs/RPA Business Analyst-page-00001.jpg",
      category: "RPA & IT Security",
      description: "This certification demonstrates foundational knowledge of robotic process automation (RPA) principles, IT security practices, and compliance with operational security standards."
    },
    {
      title: "Solo Learn SQL",
      organization: "Sololearn",
      issueDate: "2018",
      skills: ["SQL", "Database Management", "Data Querying", "Database Design", "Relational Databases"],
      imageUrl: "/client_certs/SOLO Learn SQL-page-00001.jpg",
      category: "Database Management",
      description: "This certification demonstrates foundational knowledge of SQL, data querying, database design, and relational databases for managing and analyzing data efficiently."
    }
  ];
  
  

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const amount = direction === 'left' ? -400 : 400;
      scrollContainerRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  const openModal = (cert) => {
    setSelectedCertificate(cert);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
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
                    {index === 0 ? (<Link href="https://www.cloudskillsboost.google/public_profiles/7d6c51e3-de99-4cdb-a194-4c9255fecbc4"><button 
                      className="flex items-center text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
                    >
                      <Award className="w-4 h-4 mr-1" />
                      View Badges
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </button></Link>): (<button 
                      className="flex items-center text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
                      onClick={() => openModal(cert)}
                    >
                      <Award className="w-4 h-4 mr-1" />
                      View
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </button>)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedCertificate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold text-gray-800">{selectedCertificate.title}</h2>
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>
            <img 
              src={selectedCertificate.imageUrl} 
              alt={selectedCertificate.title} 
              className="w-full h-auto object-contain mb-4"
            />
            <p className="text-gray-600 mb-4">{selectedCertificate.description}</p>
            <div className="flex items-center text-gray-600 text-sm mb-2">
              <Calendar className="w-4 h-4 mr-2" />
              <span>Issued {selectedCertificate.issueDate}</span>
            </div>
            <div className="text-sm font-medium text-gray-600 mb-4">{selectedCertificate.organization}</div>
            <div className="flex flex-wrap gap-2">
              {selectedCertificate.skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

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

