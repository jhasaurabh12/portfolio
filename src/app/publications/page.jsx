export default function Publications() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-300 dark:to-white">
          Publications
        </h1>
        
        <div className="space-y-8">
          {/* Publication Card */}
          <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl border border-gray-100 dark:border-gray-700">
            {/* Paper Title */}
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
              Computer-Aided Segmentation of Polyps Using Mask R-CNN and Approach to Reduce False Positives
            </h2>
            
            {/* Meta Information Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">Authors</h3>
                  <p className="text-gray-800 dark:text-gray-200">
                    Saurabh Jha, Balaji Jagtap, Srijan Mazumdar, Saugata Sinha
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">Publication</h3>
                  <p className="text-gray-800 dark:text-gray-200">
                    Intelligent Data Engineering and Analytics, Smart Innovation, Systems and Technologies, vol 266
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">Publisher</h3>
                  <p className="text-gray-800 dark:text-gray-200">Springer, Singapore</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">Published Date</h3>
                  <p className="text-gray-800 dark:text-gray-200">February 28, 2022</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">DOI</h3>
                  <a 
                    href="https://doi.org/10.1007/978-981-16-6624-7_10"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 underline break-words"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    10.1007/978-981-16-6624-7_10
                  </a>
                </div>
              </div>
            </div>

            {/* Abstract Section */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Abstract</h3>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Colorectal cancer is one of the most common types of cancer, with polyps being its precursor. Early detection of polyps through colonoscopy can significantly reduce the risk of colorectal cancer. This research presents a computer-aided approach for polyp segmentation using Mask R-CNN (Region-based Convolutional Neural Network) architecture, enhanced with techniques to reduce false positives. The proposed method combines deep learning-based instance segmentation with post-processing strategies to improve the accuracy of polyp detection and segmentation in colonoscopy images.
                </p>
              </div>
            </div>

            {/* Additional Details */}
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Access the Paper</h3>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://link.springer.com/chapter/10.1007/978-981-16-6624-7_10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors duration-200"
                >
                  <span>View on Springer</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </article>

          {/* Placeholder for future publications */}
          <div className="text-center py-8 text-gray-500 dark:text-gray-400">
            {/* Empty space maintained for future publications */}
          </div>
        </div>
      </main>
    </div>
  );
}