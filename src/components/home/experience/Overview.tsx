import { Fragment } from "react/jsx-runtime";
import { v4 as uuidv4 } from "uuid";

export default function Overview({ ...props }) {
  const { title, bullets } = props;

  return (
    <div className="border border-solid border-emerald p-5">
      <h3 className="font-interB text-left text-lg xl:text-xl pb-5">{title}</h3>

      <ul>
        {bullets.map((bullet: string, index: number) => {
          return (
            <Fragment key={uuidv4()}>
              <li className="font-interL text-left text-gray leading-snug">
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
