import Email from "../../assets/media/icons/Email";
import GitHub from "../../assets/media/icons/GitHub";
import LinkedIn from "../../assets/media/icons/LinkedIn";

export default function Hero() {
  return (
    <>
      <header>
        <hgroup>
          <h1>JACK DONALD MCQUEEN</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </hgroup>
      </header>

      <div>
        <a href="https://github.com/j-mcQueen/" target="_blank">
          <GitHub />
        </a>

        <a href="https://www.linkedin.com/in/jackdmcqueen/" target="_blank">
          <LinkedIn />
        </a>

        <a href="mailto:jdmcqueen@gmail.com">
          <Email />
        </a>
      </div>
    </>
  );
}
