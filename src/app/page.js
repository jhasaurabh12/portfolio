import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-700 shadow-lg">
              <Image
                src="/Saurabh.jpeg"
                alt="Saurabh Jha"
                fill
                sizes="(max-width: 768px) 192px, 192px"
                className="object-cover"
                priority
              />
            </div>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-300 dark:to-white">
            Hi, I'm Saurabh!
          </h1>
          <h2 className="font-display text-2xl md:text-3xl font-semibold mb-8 text-gray-700 dark:text-gray-200">
            Software Engineer
          </h2>
          <p className=" font-display text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Senior Software Engineer with expertise in microservices architecture and full-stack development. Specialized in building high-performance enterprise applications using modern tech stack including Quarkus, Lit and cloud technologies.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:space-x-4">
            <Link 
              href="https://raw.githubusercontent.com/jhasaurabh12/resume/main/Saurabh_Jha-CV.pdf" 
              className="relative inline-flex items-center justify-center px-8 py-4 bg-gray-800 text-white rounded-xl 
              transition-all duration-200 shadow-md hover:shadow-xl dark:bg-gray-700
              transform hover:-translate-y-1 overflow-hidden before:absolute before:inset-0 
              before:bg-gradient-to-r before:from-gray-700 before:to-gray-900 dark:before:from-gray-600 dark:before:to-gray-800
              before:opacity-0 hover:before:opacity-100 before:transition-opacity isolate"
            >
              <span className="relative z-10">View Resume</span>
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-4 border-2 border-gray-700 text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-200 dark:border-gray-400 dark:text-gray-400 dark:hover:bg-gray-800/50 transform hover:-translate-y-0.5"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            Explore My Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="group p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-100 dark:border-gray-700 hover:-translate-y-1">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                Experience
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-2">
                Check out my professional journey and the companies I've worked with.
              </p>
              <Link 
                href="/experience" 
                className="inline-flex items-center text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 font-medium"
              >
                View Experience 
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>


            <div className="group p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-100 dark:border-gray-700 hover:-translate-y-1">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                Skills
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-2">
                Discover my technical skills and areas of expertise.
              </p>
              <Link 
                href="/skills" 
                className="inline-flex items-center text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 font-medium"
              >
                View Skills
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}