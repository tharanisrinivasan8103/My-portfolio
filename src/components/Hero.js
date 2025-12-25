import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  const handleEmailClick = () => {
    // Scroll to contact section instead of opening mailto
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-10 pt-24 bg-[#0e0d1b] text-white">
      <div className="flex-1 text-left">
        <p className="text-2xl">Hi, I am</p>

        <h1 className="text-5xl sm:text-6xl font-bold mt-2">Tharani S</h1>

        <h2 className="text-xl text-purple-400 mt-2">Web Developer & MCA Student</h2>

        <p className="mt-4 max-w-xl text-gray-300">
          Passionate about building responsive web apps and solving real-world problems.
          MCA student at Adhiyamaan College of Engineering.
        </p>
        <div className="flex gap-4 mt-6">
          <a
            href="https://github.com/Tharani8103"
            target="_blank"
            rel="noreferrer"
            className="bg-white bg-opacity-10 p-3 rounded-full hover:bg-opacity-20 transition"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://linkedin.com/in/tharani8103"
            target="_blank"
            rel="noreferrer"
            className="bg-white bg-opacity-10 p-3 rounded-full hover:bg-opacity-20 transition"
          >
            <FaLinkedin size={20} />
          </a>

          <button
            onClick={handleEmailClick}
            className="bg-white bg-opacity-10 p-3 rounded-full hover:bg-opacity-20 transition cursor-pointer"
            title="Go to contact form"
          >
            <FaEnvelope size={20} />
          </button>
        </div>
        <a
  href="/resume.pdf"
  download
  target="_blank"
  rel="noopener noreferrer"
  className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
>
  Download Resume
</a>

      </div>
    </section>
  );
}
