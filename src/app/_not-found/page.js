import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Page Not Found</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">Could not find the requested page</p>
        <Link
          href="/"
          className="px-6 py-3 bg-gray-800 text-white rounded-xl hover:bg-gray-700 transition-colors duration-200 dark:bg-gray-700 dark:hover:bg-gray-600"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}