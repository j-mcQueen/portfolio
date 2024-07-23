import Email from "../../assets/media/icons/Email";
import GitHub from "../../assets/media/icons/GitHub";
import LinkedIn from "../../assets/media/icons/LinkedIn";

export default function Hero() {
  return (
    <>
      <header className="flex flex-col items-center">
        <hgroup className="max-w-[500px] text-center">
          <h1 className="font-interB text-2xl xl:text-3xl">
            JACK DONALD MCQUEEN
          </h1>

          <p className="font-interL text-gray text-center xl:text-left leading-snug py-7 xl:py-10 px-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </hgroup>
      </header>

      <div className="flex justify-center gap-7 xl:gap-5">
        <a href="https://github.com/j-mcQueen/" target="_blank">
          <GitHub className="w-7 h-7 xl:hover:fill-orange xl:transition-colors" />
        </a>

        <a href="https://www.linkedin.com/in/jackdmcqueen/" target="_blank">
          <LinkedIn className="w-7 h-7 xl:hover:fill-orange xl:transition-colors" />
        </a>

        <a href="mailto:jdmcqueen@gmail.com">
          <Email className="w-7 h-7 xl:hover:fill-orange xl:transition-colors" />
        </a>
      </div>
    </>
  );
}
