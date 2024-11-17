import { Binary, Brain, Coffee, Code } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg">
              I'm a passionate MERN stack developer with a keen eye for creating elegant solutions.
              My journey in web development started with a curiosity for building things that make a difference.
            </p>
            <p className="text-gray-300 text-lg">
              I specialize in crafting modern web applications using MongoDB, Express.js, React.js, and Node.js.
              Clean code and user experience are at the heart of everything I build.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              {
                icon: <Code className="w-8 h-8 text-emerald-500" />,
                title: "Clean Code",
                description: "Writing maintainable and efficient code"
              },
              {
                icon: <Brain className="w-8 h-8 text-emerald-500" />,
                title: "Problem Solving",
                description: "Finding elegant solutions to complex problems"
              },
              {
                icon: <Binary className="w-8 h-8 text-emerald-500" />,
                title: "Full Stack",
                description: "End-to-end application development"
              },
              {
                icon: <Coffee className="w-8 h-8 text-emerald-500" />,
                title: "Passionate",
                description: "Dedicated to continuous learning"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 bg-gray-900 rounded-lg border border-gray-800 hover:border-emerald-500 transition-colors"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}