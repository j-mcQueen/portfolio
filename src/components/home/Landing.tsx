import Experience from "./experience/Experience";
import Hero from "./Hero";
import Projects from "./projects/Projects";

export default function Landing({ ...props }) {
  const { setActiveProject } = props;

  return (
    <main className="py-5">
      <section>
        <Hero />
      </section>

      <section className="text-center pt-14 pb-10">
        <Projects setActiveProject={setActiveProject} />

        <div className="flex justify-center">
          <span className="block h-[1px] w-[350px] bg-white"></span>
        </div>
      </section>

      <section className="text-center">
        <Experience />
      </section>
    </main>
  );
}
