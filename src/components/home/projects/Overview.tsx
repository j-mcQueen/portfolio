import { useNavigate } from "react-router-dom";
import Outward from "../../../assets/media/icons/Outward";
import JS from "../../../assets/media/icons/tech/JS";
import TS from "../../../assets/media/icons/tech/TS";
import TW from "../../../assets/media/icons/tech/TW";
import RE from "../../../assets/media/icons/tech/RE";
import MDB from "../../../assets/media/icons/tech/MDB";
import PY from "../../../assets/media/icons/tech/PY";

export default function Overview({ ...props }) {
  const { title, blurb, tech } = props;
  const navigate = useNavigate();

  const handleOpen = (title: string) => {
    let sanitized = title;
    if (title.includes(" ")) sanitized = title.replace(/\W/g, ""); // strip title of everything except letters and numbers
    return navigate(`/projects/${sanitized.toLowerCase()}`);
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

      <p className="font-interL text-gray text-left py-3 xl:py-2 leading-snug ">
        {blurb}
      </p>

      <div className="flex justify-evenly">
        {tech.includes("JS") ? <JS className="w-5 h-5 xl:w-7 xl:h-7" /> : null}
        {tech.includes("TS") ? <TS className="w-5 h-5 xl:w-7 xl:h-7" /> : null}
        {tech.includes("TW") ? <TW className="w-5 h-5 xl:w-7 xl:h-7" /> : null}
        {tech.includes("RE") ? <RE className="w-5 h-5 xl:w-7 xl:h-7" /> : null}
        {tech.includes("MDB") ? (
          <MDB className="w-5 h-5 xl:w-7 xl:h-7" />
        ) : null}
        {tech.includes("PY") ? <PY className="w-5 h-5 xl:w-7 xl:h-7" /> : null}
      </div>
    </button>
  );
}
