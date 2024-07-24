import GitHub from "../../assets/media/icons/GitHub";
import OpenInNew from "../../assets/media/icons/OpenInNew";

export default function Header({ ...props }) {
  const { data } = props;

  return (
    <header className="flex items-center justify-between">
      <h1 className="font-interB xl:text-3xl">{data.title}</h1>

      <div className="flex items-center gap-5">
        {data.link ? (
          <a
            href={data.link}
            target="_blank"
            className="flex items-center gap-2 text-sm text-gray border border-solid border-emerald py-1 px-2 xl:focus:border-orange xl:focus:outline-none xl:hover:border-orange xl:transition-colors"
          >
            view
            <OpenInNew className="w-5 h-5" />
          </a>
        ) : (
          <div className="text-sm border border-solid border-emerald py-2 px-3">
            <p className="flex items-center gap-2">
              {data.local ? "Local project" : "In development"}
              <span className="block w-2 h-2 bg-orange rounded-full"></span>
            </p>
          </div>
        )}

        <a href={data.repo} target="_blank">
          <GitHub className="w-7 h-7 xl:hover:fill-orange xl:transition-colors" />
        </a>
      </div>
    </header>
  );
}
