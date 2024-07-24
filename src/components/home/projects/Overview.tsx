import { useNavigate } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import { v4 as uuidv4 } from "uuid";

import Outward from "../../../assets/media/icons/Outward";
import JS from "../../../assets/media/icons/tech/JS";
import TS from "../../../assets/media/icons/tech/TS";
import TW from "../../../assets/media/icons/tech/TW";
import RE from "../../../assets/media/icons/tech/RE";
import MDB from "../../../assets/media/icons/tech/MDB";
import PY from "../../../assets/media/icons/tech/PY";

export default function Overview({ ...props }) {
  const { title, blurb, tech, setActiveProject } = props;
  const navigate = useNavigate();

  const toolsClass = "w-5 h-5 xl:w-7 xl:h-7";
  const tools = {
    JS: <JS className={toolsClass} />,
    TS: <TS className={toolsClass} />,
    TW: <TW className={toolsClass} />,
    RE: <RE className={toolsClass} />,
    MDB: <MDB className={toolsClass} />,
    PY: <PY className={toolsClass} />,
  };

  const handleOpen = (title: string) => {
    let sanitized = title;
    if (title.includes(" ")) sanitized = title.replace(/\W/g, ""); // strip title of everything except letters and numbers
    const sanitizedL = sanitized.toLowerCase();

    setActiveProject(sanitizedL);
    return navigate(`/projects/${sanitizedL}`);
  };

  return (
    <button
      type="button"
      className="border border-solid border-emerald p-3 xl:hover:border-orange focus:outline-none focus:border-orange transition-colors"
      onClick={() => handleOpen(title)}
    >
      <div className="flex items-center justify-between">
        <h3 className="font-interB text-lg xl:text-xl">{title}</h3>
        <Outward className="w-5 h-5" />
      </div>

      <p className="font-interL text-gray text-left text-sm py-3 xl:py-2 leading-snug ">
        {blurb}
      </p>

      <div className="flex justify-evenly">
        {tech.map((tool: string) => {
          return (
            <Fragment key={uuidv4()}>
              {tools[tool as keyof typeof tools]}
            </Fragment>
          );
        })}
      </div>
    </button>
  );
}
