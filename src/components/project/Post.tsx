import { Fragment, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import Bulb from "../../assets/media/icons/Bulb";

export default function Post({ ...props }) {
  const { data, targetLink } = props;

  const motivationsRef = useRef<null | HTMLDivElement>(null);
  const featureARef = useRef<null | HTMLDivElement>(null);
  const featureBRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    // when targetLink changes, scroll to the appropriate container

    const scrollOpts: ScrollIntoViewOptions = {
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    };

    switch (targetLink) {
      case "MOTIVATIONS":
        if (motivationsRef.current)
          motivationsRef.current.scrollIntoView(scrollOpts);
        break;

      case targetLink === data.features[0].title:
        if (featureARef.current) featureARef.current.scrollIntoView(scrollOpts);
        break;

      case targetLink === data.features[1].title:
        if (featureBRef.current) featureBRef.current.scrollIntoView(scrollOpts);
        break;

      default:
        break;
    }
  }, [targetLink, data]);

  return (
    <div className="xl:max-w-[800px] text-gray leading-snug">
      <div className="py-10 flex flex-col items-center justify-center">
        <p className="text-gray font-interL">{data.summary}</p>

        <span className="block w-1/2 h-[1px] bg-white mt-10"></span>
      </div>

      <hgroup ref={motivationsRef} className="text-gray">
        <h2 className="flex justify-center items-center font-interB text-white xl:text-xl gap-3 pb-10">
          <Bulb className="xl:w-7 xl:h-7 w-5 h-5" /> MOTIVATIONS
        </h2>

        {data.motivations.map((motivation: string, index: number) => {
          return (
            <p
              key={uuidv4()}
              className={`${index % 2 !== 0 ? "py-5" : null} font-interL`}
            >
              {motivation}
            </p>
          );
        })}
      </hgroup>

      {data.features.map(
        (feature: { title: string; paras: string[] }, index: number) => {
          // TODO if there are more than 2 features, it may be more appropriate to move the logic to determine which ref to supply to its own function that uses switch/case
          return (
            <div ref={index === 0 ? featureARef : featureBRef} key={uuidv4()}>
              {feature.paras.map((para: string) => {
                return (
                  <Fragment key={uuidv4()}>
                    <p>{para}</p>

                    {/* {j === 1 ? <></> : null} */}
                    {/* TODO choose appropriate indexs to place a relevant application image / demo */}
                  </Fragment>
                );
              })}
            </div>
          );
        }
      )}
    </div>
  );
}
