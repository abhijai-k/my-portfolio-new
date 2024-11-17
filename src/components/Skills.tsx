import { CheckCircle2 } from 'lucide-react';

export default function Skills() {
  const skills = {
    "Programming Languages": [
      "Python",
      "Java",
      "C",
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "Web Technologies": [
      "React.js",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "MongoDB",
      "Web Development"
    ],
    "Mobile Development": [
      "Android Development",
      "Android Studio",
      "Java"
    ],
    "Tools & Design": [
      "VS Code",
      "Figma",
      "Git",
      "Frontend Development"
    ]
  };

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Skills</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="p-4 sm:p-6 bg-gray-900 rounded-lg border border-gray-800 hover:border-emerald-500 transition-all duration-300 transform hover:-translate-y-1"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">{category}</h3>
              <ul className="space-y-2 sm:space-y-3">
                {items.map((skill, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-gray-300 text-sm sm:text-base">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}