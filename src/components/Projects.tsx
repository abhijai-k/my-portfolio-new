import { ExternalLink, Github } from 'lucide-react';
import pr1 from './assets/pr1.png'
import pr2 from './assets/pr2.png'
import pr3 from './assets/pr3.png'

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
      image: pr1,
      tags: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/abhijai-k/ecommerce-website",
      demo: "https://my-ecommerce-websitee.netlify.app/"
    },
    {
      title: "Event Management Website",
      description: "A responsive React event platform with real-time updates, analytics, and cross-device compatibility.",
      image: pr2,
      tags: ["React", "Javascript", "Tailwind"],
      github: "https://github.com/abhijai-k/event-management-website",
      demo: "https://devieventmanagement.site/"
    },
    {
      title: "Hardware Website",
      description: "A responsive React website for a hardware shop, showcasing products with smooth navigation across devices.",
      image: pr3,
      tags: ["React", "Javascript", "Tailwind"],
      github: "https://github.com/abhijai-k/sj-hardwares",
      demo: "https://sjhardwares.in/"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Projects</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-emerald-500 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.github}
                    className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href={project.demo}
                    className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm sm:text-base">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-800 text-emerald-500 rounded-full text-xs sm:text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}