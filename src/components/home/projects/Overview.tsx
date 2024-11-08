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
  const { title, url, blurb, tech } = props;

  const toolsClass = "w-5 h-5 xl:w-7 xl:h-7";
  const tools = {
    JS: <JS className={toolsClass} />,
    TS: <TS className={toolsClass} />,
    TW: <TW className={toolsClass} />,
    RE: <RE className={toolsClass} />,
    MDB: <MDB className={toolsClass} />,
    PY: <PY className={toolsClass} />,
  };

  return (
    <a
      href={url}
      type="button"
      className="border border-solid border-ice p-3 xl:hover:border-orange focus:outline-none focus:border-orange transition-colors"
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
    </a>
  );
}
