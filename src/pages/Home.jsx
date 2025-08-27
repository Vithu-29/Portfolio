import Hero from "../components/Hero";
import Education from "../components/Education";
import Skill from "../components/Skill";
import Project from "../components/Project";
import Contact from "../components/Contact";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Hero />
            <Education />
            <Skill />
            <Project />
            <Contact />
        </main>
    );
}