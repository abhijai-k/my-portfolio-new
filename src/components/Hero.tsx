import { Github, Linkedin, Mail, Terminal } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[calc(100vh-4rem)] pt-16 flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#1a1a1a_0%,#000000_100%)]" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Text Content */}
        <div className="space-y-6 text-center lg:text-left">
          <div className="space-y-2">
            <h2 className="text-emerald-500 text-lg sm:text-xl font-mono">&lt;Hello World /&gt;</h2>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              I'm Abhijai K
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-400">MERN Stack Developer</p>
          </div>

          <p className="text-gray-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
            Crafting robust web applications with modern technologies and best practices.
            Specialized in building full-stack solutions with MongoDB, Express, React, and Node.js.
          </p>

          <div className="flex justify-center lg:justify-start space-x-4">
            <a
              href="https://github.com/abhijai-k"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <Github className="w-6 h-6 text-white" />
            </a>
            <a
              href="https://linkedin.com/in/abhijaik"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <Linkedin className="w-6 h-6 text-white" />
            </a>
            <a
              href="mailto:abhijai2001@gmail.com"
              className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <Mail className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>

        {/* Code Section and Design */}
        <div className="relative flex flex-col items-center lg:items-end">
          {/* Green Icon Design */}
          <Terminal
            className="w-32 h-32 text-emerald-500 opacity-20 absolute top-0 left-0 lg:w-96 lg:h-96 lg:opacity-40 lg:-right-20 lg:-bottom-20"
          />
          {/* Code Block */}
          <div className="relative bg-gray-900 rounded-lg p-6 border border-gray-800 transform hover:scale-105 transition-transform duration-300 mt-20 lg:mt-0">
            <pre className="text-sm text-gray-300 font-mono overflow-x-auto">
              <code>{`const developer = {
  name: 'Abhijai K',
  title: 'MERN Stack Developer',
  skills: ['MongoDB', 'Express.js',
    'React.js', 'Node.js'],
  passion: 'Building scalable web apps'
};`}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
