import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,#1a1a1a_0%,#000000_100%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Contact Me</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-6 text-center">
              <h3 className="text-xl sm:text-2xl font-semibold text-white">Get in Touch</h3>
              <p className="text-gray-400 text-sm sm:text-base">
              Let's connect! I'm open to new projects, collaborations, and opportunities. Reach out today!
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="flex flex-col items-center space-y-4 p-4 sm:p-6 bg-gray-900 rounded-lg border border-gray-800 hover:border-emerald-500 transition-all duration-300 transform hover:-translate-y-1">
                <div className="p-3 bg-gray-800 rounded-lg">
                  <Mail className="w-6 h-6 text-emerald-500" />
                </div>
                <div className="text-center">
                  <p className="text-gray-400 text-sm">Mail me at</p>
                  <p className="text-white text-sm sm:text-base">abhijai2001@gmail.com</p>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-4 p-4 sm:p-6 bg-gray-900 rounded-lg border border-gray-800 hover:border-emerald-500 transition-all duration-300 transform hover:-translate-y-1">
                <div className="p-3 bg-gray-800 rounded-lg">
                  <Phone className="w-6 h-6 text-emerald-500" />
                </div>
                <div className="text-center">
                  <p className="text-gray-400 text-sm">Call me at</p>
                  <p className="text-white text-sm sm:text-base">+91 9207926132</p>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-4 p-4 sm:p-6 bg-gray-900 rounded-lg border border-gray-800 hover:border-emerald-500 transition-all duration-300 transform hover:-translate-y-1 sm:col-span-2 lg:col-span-1">
                <div className="p-3 bg-gray-800 rounded-lg">
                  <MapPin className="w-6 h-6 text-emerald-500" />
                </div>
                <div className="text-center">
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white text-sm sm:text-base">Kannur, Kerala, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}