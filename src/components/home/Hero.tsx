import Email from "../../assets/media/icons/Email";
import GitHub from "../../assets/media/icons/GitHub";
import LinkedIn from "../../assets/media/icons/LinkedIn";

export default function Hero() {
  return (
    <>
      <header className="flex flex-col items-center text-center leading-snug pb-7">
        <hgroup>
          <h1 className="font-interB text-2xl xl:text-3xl">
            JACK DONALD MCQUEEN
          </h1>

          <p className="font-interL max-w-[700px] text-gray xl:text-center xl:text-lg pt-7 xl:pt-7 px-2">
            Hello and welcome! I am a Scottish software engineer, sales
            development enthusiast, and casual snow/skateboarder based in New
            York.
          </p>
        </hgroup>

        <span className="bg-orangeDim border border-solid border-orange font-interB tracking-normal mt-4 text-sm px-1">
          AVAILABLE FOR WORK
        </span>
      </header>

      <div className="flex justify-center gap-7 xl:gap-5">
        <a href="https://github.com/j-mcQueen/" target="_blank">
          <GitHub className="w-7 h-7 xl:hover:fill-ice xl:transition-colors" />
        </a>

        <a href="https://www.linkedin.com/in/jackdmcqueen/" target="_blank">
          <LinkedIn className="w-7 h-7 xl:hover:fill-ice xl:transition-colors" />
        </a>

        <a href="mailto:jdmcqueen44@gmail.com">
          <Email className="w-7 h-7 xl:hover:fill-ice xl:transition-colors" />
        </a>
      </div>
    </>
  );
}
