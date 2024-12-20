import { Fragment } from "react/jsx-runtime";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";

export default function Overview({ ...props }) {
  const { title, company, bullets, icons } = props;

  const childVariant = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      variants={childVariant}
      className="border border-solid border-ice p-5 xl:max-w-[575px]"
    >
      <hgroup className="flex items-center justify-between pb-5">
        <h3 className="font-interB text-left text-lg xl:text-xl">{title}</h3>

        <p className="text-gray leading-snug text-sm">{company}</p>
      </hgroup>

      <ul>
        {bullets.map((bullet: string, index: number) => {
          return (
            <Fragment key={uuidv4()}>
              <li className="flex items-center gap-5 font-interL text-left text-sm text-gray leading-snug">
                {icons[index]}

                <span>
                  {bullet}
                  {index === bullets.length - 1 &&
                  title === "SOFTWARE ENGINEER" ? (
                    <>
                      &nbsp;
                      <a
                        href="https://4sbelectric.co.uk/"
                        target="_blank"
                        className="text-orange xl:hover:underline"
                      >
                        [view]
                      </a>
                    </>
                  ) : null}
                </span>
              </li>

              {index >= 0 && index !== bullets.length - 1 ? (
                <span className="block py-2">+</span>
              ) : null}
            </Fragment>
          );
        })}
      </ul>
    </motion.div>
  );
}
