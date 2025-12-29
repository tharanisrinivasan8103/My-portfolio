export default function Projects() {
  return (
    <section id="projects" className="py-20 px-10 bg-[#121020] text-center">
      <h2 className="text-4xl font-bold mb-4">Projects</h2>
      <div className="w-24 h-1 mx-auto bg-gradient-to-r from-blue-400 to-purple-500 mb-12"></div>

      <div className="space-y-8 max-w-4xl mx-auto">

        {/* Project 1 */}
        <div className="bg-white bg-opacity-5 p-6 rounded-xl text-left">
          <h3 className="text-xl font-semibold text-purple-300">
            Feedback Collector WebApp
          </h3>
          <p className="text-gray-300 mt-2">
            A lightweight Node.js application that collects user feedback through
            a form and stores it in a JSON file. Built using core Node.js modules
            without any external frameworks, focusing on simplicity and backend fundamentals.
          </p>
          <p className="mt-2 text-sm text-gray-400">
            Tech Stack: Node.js | File System | HTTP Module
          </p>
          <p className="mt-1 text-sm text-gray-400">
            Mar 2025 – Apr 2025
          </p>
        </div>

        {/* Project 2 */}
        <div className="bg-white bg-opacity-5 p-6 rounded-xl text-left">
          <h3 className="text-xl font-semibold text-purple-300">
            Expense Tracker
          </h3>
          <p className="text-gray-300 mt-2">
            A React.js web application that helps users record and manage their
            daily income and expenses. The app automatically calculates totals
            and presents financial data in a clean, user-friendly interface.
            All expense records are securely stored in a MySQL database for
            organized and efficient budgeting.
          </p>
          <p className="mt-2 text-sm text-gray-400">
            Tech Stack: React.js | Node.js | MySQL | CSS
          </p>
        </div>

        {/* Project 3 */}
        <div className="bg-white bg-opacity-5 p-6 rounded-xl text-left">
          <h3 className="text-xl font-semibold text-purple-300">
            Personal Portfolio Website
          </h3>
          <p className="text-gray-300 mt-2">
            A modern, responsive personal portfolio website built using React.js
            to showcase my skills, projects, and education. Designed with a
            dark-themed UI and smooth navigation to create a professional online presence.
          </p>
          <p className="mt-2 text-sm text-gray-400">
            Tech Stack: React.js | Tailwind CSS | Netlify
          </p>
          <a
            href="https://tharani-portfolio-5ee511.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-sm text-blue-400 hover:underline"
          >
            🔗 View Live Portfolio
          </a>
        </div>

      </div>
    </section>
  );
}
