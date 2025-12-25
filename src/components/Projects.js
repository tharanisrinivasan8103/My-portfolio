export default function Projects() {
  return (
    <section id="projects" className="py-20 px-10 bg-[#121020] text-center">
      <h2 className="text-4xl font-bold mb-4">Projects</h2>
      <div className="w-24 h-1 mx-auto bg-gradient-to-r from-blue-400 to-purple-500 mb-8"></div>
      <div className="bg-white bg-opacity-5 p-6 rounded-xl text-left max-w-3xl mx-auto">
        <h3 className="text-xl font-semibold text-purple-300">Feedback Collector WebApp</h3>
        <p className="text-gray-300 mt-2">
          A lightweight Node.js app that collects user feedback through a form and stores it in a JSON file. Built with core Node.js modules without external frameworks.
        </p>
        <p className="mt-2 text-sm text-gray-400">Mar 2025 – Apr 2025</p>
      </div>
    </section>
  );
}
