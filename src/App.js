import { HashRouter as Router } from 'react-router-dom';

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from './components/Education'; 
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Education />
                <Contact />
                <Footer />
            </div>
        </Router>
    );
}
