import { data } from "./data";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";
import Overview from "./Overview";

export default function Projects({ ...props }) {
  const { setActiveProject } = props;

  const parentVariant = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  return (
    <>
      <hgroup className="pb-5">
        <h2 className="text-xl xl:text-2xl font-interB pb-5 tracking-tighter leading-snug">
          PROJECTS
        </h2>

        <p className="font-interL xl:text-lg text-gray leading-snug">
          The fruits of a labor of love for every developer.
        </p>
      </hgroup>

      <motion.div
        initial="initial"
        animate="animate"
        variants={parentVariant}
        className="grid xl:grid-cols-[repeat(2,minmax(0,500px))] px-3 xl:px-0 items-center justify-center gap-5 pb-10"
      >
        {data.map((item) => {
          return (
            <Overview
              key={uuidv4()}
              title={item.title}
              blurb={item.blurb}
              tech={item.tech}
              url={item.url}
              setActiveProject={setActiveProject}
            />
          );
        })}
      </motion.div>
    </>
  );
}
