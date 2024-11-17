import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Experience</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-900 rounded-lg p-4 sm:p-6 border border-gray-800 hover:border-emerald-500 transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
              <div className="flex items-center space-x-3">
                <Briefcase className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                <h3 className="text-lg sm:text-xl font-semibold text-white">MERN Stack Intern</h3>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Calendar className="w-5 h-5 flex-shrink-0" />
                <span>6 months</span>
              </div>
            </div>
            
            <div className="mb-4">
              <h4 className="text-lg text-emerald-500">Riss Technologies</h4>
              <p className="text-gray-400">Kannur, Kerala</p>
            </div>

            <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2 flex-shrink-0">•</span>
                Developed and maintained web applications using the MERN stack
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2 flex-shrink-0">•</span>
                Collaborated with senior developers on various client projects
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2 flex-shrink-0">•</span>
                Implemented responsive designs
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2 flex-shrink-0">•</span>
                Participated in code reviews and team meetings
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}