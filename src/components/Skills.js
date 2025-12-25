export default function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React JS", "Node JS"];
  return (
    <section id="skills" className="py-20 px-10 bg-[#0e0d1b] text-center text-white">
      <h2 className="text-4xl font-bold mb-4">My Skills</h2>
      <div className="w-24 h-1 mx-auto bg-gradient-to-r from-blue-400 to-purple-500 mb-8"></div>
      <div className="flex justify-center flex-wrap gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 rounded-lg font-bold hover:scale-105 transition-transform"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
