import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Certificates from "./components/Certificates";
import Skills from "./components/Skills";
import ProjectCard from "./components/ProjectCard";
import Reveal from "./components/Reveal";


export default function Home() {
  return (
    <>
      <Navbar />


      <main className="text-foreground">

        <Hero />

        <Skills />

        <section id="projects" className="max-w-6xl mx-auto px-6 py-28">
          <Reveal>
            <h2 className="text-4xl font-bold mb-14 text-center">
              Projects
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
           <ProjectCard
      title="Guys and Gals Salon Booking Website"
      description="Online salon booking system"
      repo="https://github.com/Chizstic/final-proj.git"
      image="/Guys and Gals proj.png"
    />

        <ProjectCard
          title="Sentra - Head Monitoring System"
          description="AI cheating detection using head tracking"
          repo="https://github.com/YojLuengas/Setra-Cheating-Detection.git"
          image="/Sentra.png"
        />
          </div>
        </section>

        <Certificates />

      </main>
    </>
  );
}
