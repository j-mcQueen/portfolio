import { Fragment } from "react/jsx-runtime";
import { v4 as uuidv4 } from "uuid";

export default function Overview({ ...props }) {
  const { title, bullets, icons } = props;

  return (
    <div className="border border-solid border-ice p-5 xl:max-w-[575px]">
      <h3 className="font-interB text-left text-lg xl:text-xl pb-5">{title}</h3>

      <ul>
        {bullets.map((bullet: string, index: number) => {
          return (
            <Fragment key={uuidv4()}>
              <li className="flex items-center gap-5 font-interL text-left text-sm text-gray leading-snug">
                {icons[index]}

                {bullet}
              </li>

              {index === 0 || index === 1 ? (
                <span className="block py-2">+</span>
              ) : null}
            </Fragment>
          );
        })}
      </ul>
    </div>
  );
}
