export default function Education() {
  const education = [
    {
      degree: "Master of Computer Applications",
      college: "Adhiyamaan College of Engineering",
      year: "2024 - 2026"
    },
    {
      degree: "B.Sc in Chemistry",
      college: "Gonzaga College Of Arts And Science For Women",
      year: "2020 - 2023",
      cgpa: "CGPA: 7.92/10"
    },
    {
      degree: "HSC (XII) - Science",
      college: "St. Kanakadasa Matric Hr. Sec. School",
      year: "2020",
      score: "62.10%"
    },
    {
      degree: "SSLC (X)",
      college: "Sri Ramakrishna Vidyalaya Matric School",
      year: "2018",
      score: "76.20%"
    },
  ];

  return (
    <section id="education" className="py-20 px-10 bg-[#0e0d1b] text-center text-white">
      <h2 className="text-4xl font-bold mb-4">Education</h2>
      <div className="w-24 h-1 mx-auto bg-gradient-to-r from-blue-400 to-purple-500 mb-8"></div>

      <div className="space-y-6 max-w-3xl mx-auto text-left">
        {education.map((edu, index) => (
          <div key={index} className="bg-white bg-opacity-5 p-5 rounded-lg">
            <h3 className="text-xl font-semibold">{edu.degree}</h3>
            <p className="text-purple-300">{edu.college}</p>
            <p className="text-gray-400">{edu.year}</p>
            {edu.cgpa && <p className="text-sm text-gray-400">{edu.cgpa}</p>}
            {edu.score && <p className="text-sm text-gray-400">{edu.score}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
