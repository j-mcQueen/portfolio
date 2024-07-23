import { data } from "./data";
import { v4 as uuidv4 } from "uuid";
import Overview from "./Overview";
import Code from "../../../assets/media/icons/experience/Code";
import Design from "../../../assets/media/icons/experience/Design";
import Partner from "../../../assets/media/icons/experience/Partner";
import Bank from "../../../assets/media/icons/experience/Bank";
import Money from "../../../assets/media/icons/experience/Money";
import Globe from "../../../assets/media/icons/experience/Globe";
import Clothes from "../../../assets/media/icons/experience/Clothes";
import Star from "../../../assets/media/icons/experience/Star";
import Organise from "../../../assets/media/icons/experience/Organise";

export default function Experience() {
  const expClass = "xl:w-10 xl:h-10 w-16 h-16";
  const icons = [
    [
      <Code className={expClass} />,
      <Design className={expClass} />,
      <Partner className={expClass} />,
    ],
    [
      <Organise className={expClass} />,
      <Bank className={expClass} />,
      <Money className={expClass} />,
    ],
    [
      <Globe className={expClass} />,
      <Clothes className={expClass} />,
      <Star className={expClass} />,
    ],
  ];

  return (
    <>
      <h2 className="text-xl xl:text-2xl font-interB pb-5">EXPERIENCE</h2>

      <div className="flex flex-col xl:flex-row px-3 xl:px-5 items-center xl:items-start justify-center gap-5 pb-10">
        {data.map((item, index) => {
          return (
            <Overview
              key={uuidv4()}
              title={item.title}
              bullets={item.bullets}
              icons={icons[index]}
            />
          );
        })}
      </div>
    </>
  );
}
