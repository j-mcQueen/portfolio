export default function JS({ ...props }) {
  const { className } = props;
  return (
    <svg
      role="img"
      aria-labelledby="jsTitle jsDesc"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
    >
      <title id="jsTitle">The JavaScript logo</title>
      <desc id="jsDesc">The JavaScript logo</desc>
      <path
        d="M18.774 19.7a3.727 3.727 0 003.376 2.078c1.418 0 2.324-.709 2.324-1.688 0-1.173-.931-1.589-2.491-2.272l-.856-.367c-2.469-1.052-4.11-2.37-4.11-5.156 0-2.567 1.956-4.52 5.012-4.52A5.058 5.058 0 0126.9 10.52l-2.665 1.711a2.327 2.327 0 00-2.2-1.467 1.489 1.489 0 00-1.638 1.467c0 1.027.636 1.442 2.1 2.078l.856.366c2.908 1.247 4.549 2.518 4.549 5.376 0 3.081-2.42 4.769-5.671 4.769a6.575 6.575 0 01-6.236-3.5zM6.686 20c.538.954 1.027 1.76 2.2 1.76 1.124 0 1.834-.44 1.834-2.15V7.975h3.422v11.683c0 3.543-2.078 5.156-5.11 5.156A5.312 5.312 0 013.9 21.688z"
        fill="#f5de19"
      ></path>
    </svg>
  );
}
