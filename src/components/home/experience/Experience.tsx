import { data } from "./data";
import { v4 as uuidv4 } from "uuid";
import Overview from "./Overview";

export default function Experience() {
  return (
    <>
      <h2 className="text-xl xl:text-2xl font-interB pb-5">EXPERIENCE</h2>

      <div className="flex flex-col xl:flex-row px-3 xl:px-5 items-center justify-center gap-5 pb-10">
        {data.map((item) => {
          return (
            <Overview
              key={uuidv4()}
              title={item.title}
              bullets={item.bullets}
            />
          );
        })}
      </div>
    </>
  );
}
