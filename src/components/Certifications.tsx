import { Award, ExternalLink } from 'lucide-react';
import cert1Thumbnail from './assets/meta.jpg'; // Import local images
import cert2Thumbnail from './assets/udemy.png';

export default function Certifications() {
  const certifications = [
    {
      title: "Professional Frontend Development",
      issuer: "Meta",
      date: "2024",
      link: "https://coursera.org/share/c38c9897bdeb36672fc2745afb39221c",
      image: cert1Thumbnail // Local image for the certificate
    },
    {
      title: "MERN Stack 2024",
      issuer: "Udemy",
      date: "2024",
      link: "https://www.udemy.com/certificate/UC-f9b72801-89c5-4cc0-a9f3-f2446842b6cc/",
      image: cert2Thumbnail // Local image for the certificate
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg p-4 sm:p-6 border border-gray-800 hover:border-emerald-500 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center space-x-3 mb-4">
                {/* Display the thumbnail image */}
                <img src={cert.image} alt={`${cert.title} thumbnail`} className="w-16 h-16 rounded-lg object-cover" />
                <Award className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                <h3 className="text-base sm:text-lg font-semibold text-white">{cert.title}</h3>
              </div>
              
              <div className="space-y-2 mb-4">
                <p className="text-gray-400 text-sm sm:text-base">{cert.issuer}</p>
                <p className="text-gray-500 text-sm">{cert.date}</p>
              </div>
              
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-emerald-500 hover:text-emerald-400 transition-colors text-sm sm:text-base"
              >
                <span>View Certificate</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
