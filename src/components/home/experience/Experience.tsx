import { data } from "./data";
import { v4 as uuidv4 } from "uuid";
import Overview from "./Overview";
import Code from "../../../assets/media/icons/experience/Code";
import Design from "../../../assets/media/icons/experience/Design";
import Bolt from "../../../assets/media/icons/experience/Bolt";
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
      <Bolt className={expClass} />,
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
      <hgroup className="pb-5">
        <h2 className="text-xl xl:text-2xl font-interB pb-5">EXPERIENCE</h2>

        <p className="text-gray xl:text-lg font-interL leading-snug">
          As you can see, I have been quite the Jack of all trades...
        </p>
      </hgroup>

      <div className="flex flex-col xl:flex-row px-3 xl:px-5 items-center xl:items-start justify-center gap-5 pb-10">
        {data.map((item, index) => {
          return (
            <Overview
              key={uuidv4()}
              title={item.title}
              bullets={item.bullets}
              company={item.company}
              icons={icons[index]}
            />
          );
        })}
      </div>
    </>
  );
}
