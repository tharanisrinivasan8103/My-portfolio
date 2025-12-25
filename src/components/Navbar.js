export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full flex justify-between items-center p-5 px-10 bg-[#0e0d1b] z-10 shadow-lg">
      <h1 className="text-xl font-bold">Portfolio</h1>
      <ul className="flex gap-6">
        <li><a href="#about" className="hover:text-purple-400">About</a></li>
        <li><a href="#skills" className="hover:text-purple-400">Skills</a></li>
        <li><a href="#projects" className="hover:text-purple-400">Projects</a></li>
        <li><a href="#education" className="hover:text-purple-400">Education</a></li>
        <li><a href="#contact" className="hover:text-purple-400">Contact</a></li>
      </ul>
    </nav>
  );
}
