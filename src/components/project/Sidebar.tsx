import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import Return from "../../assets/media/icons/Return";

export default function Sidebar({ ...props }) {
  const { data, setTargetLink } = props;
  const btnClass =
    "xl:hover:text-orange focus:text-orange focus:outline-none transition-colors";
  const navigate = useNavigate();

  return (
    <aside>
      <button type="button" onClick={() => navigate("/")}>
        <Return className="xl:w-7 xl:h-7 w-5 h-5 xl:hover:fill-orange xl:transition-colors" />
      </button>

      <ul className="pt-5 flex flex-col gap-3 text-lg">
        <li>
          <button
            type="button"
            onClick={() => setTargetLink("MOTIVATIONS")}
            className={btnClass}
          >
            — MOTIVATIONS
          </button>
        </li>

        {data.features.map((feature: { title: string }) => {
          return (
            <li key={uuidv4()}>
              <button
                type="button"
                onClick={() => setTargetLink(feature.title)}
                className={btnClass}
              >
                — {feature.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
