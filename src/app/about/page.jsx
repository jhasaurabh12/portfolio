export default function About() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 dark:text-white">About Me</h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              I am a passionate Full-Stack Web Developer with a strong foundation in Computer Science. 
              Currently pursuing my graduate studies, I combine academic knowledge with practical 
              experience to create robust and scalable web applications.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 dark:text-white">Education</h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm mb-6">
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Master of Science in Computer Science</h3>
              <p className="text-gray-600 dark:text-gray-300">Expected Graduation: 2024</p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4 dark:text-white">Professional Experience</h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm mb-6">
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Full-Stack Developer</h3>
              <p className="text-gray-600 dark:text-gray-300">
                With experience in both frontend and backend development, I specialize in creating 
                modern web applications using technologies like React, Node.js, and various cloud platforms.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4 dark:text-white">Technical Skills</h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                <li>Frontend: React, Next.js, TypeScript, Tailwind CSS</li>
                <li>Backend: Node.js, Express, Python, Django</li>
                <li>Databases: MongoDB, PostgreSQL, MySQL</li>
                <li>Cloud Platforms: AWS, Azure, Google Cloud</li>
                <li>DevOps: Docker, Kubernetes, CI/CD</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 