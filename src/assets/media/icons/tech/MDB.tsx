export default function MDB({ ...props }) {
  const { className } = props;

  return (
    <svg
      role="img"
      aria-labelledby="MDBTitle MDBDesc"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
    >
      <title id="MDBTitle">The MongoDB logo</title>
      <desc id="MDBDesc">The MongoDB logo</desc>
      <defs>
        <linearGradient
          id="mongo_svg__a_474"
          x1="-645.732"
          y1="839.188"
          x2="-654.59"
          y2="839.25"
          gradientTransform="matrix(-.977 -.323 -.29 .877 -375.944 -928.287)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".231" stopColor="#999875"></stop>
          <stop offset=".563" stopColor="#9b9977"></stop>
          <stop offset=".683" stopColor="#a09f7e"></stop>
          <stop offset=".768" stopColor="#a9a889"></stop>
          <stop offset=".837" stopColor="#b7b69a"></stop>
          <stop offset=".896" stopColor="#c9c7b0"></stop>
          <stop offset=".948" stopColor="#deddcb"></stop>
          <stop offset=".994" stopColor="#f8f6eb"></stop>
          <stop offset="1" stopColor="#fbf9ef"></stop>
        </linearGradient>
        <linearGradient
          id="mongo_svg__b_475"
          x1="-644.287"
          y1="823.405"
          x2="-657.028"
          y2="845.476"
          gradientTransform="matrix(-.977 -.323 -.29 .877 -375.944 -928.287)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#48a547"></stop>
          <stop offset="1" stopColor="#3f9143"></stop>
        </linearGradient>
        <linearGradient
          id="mongo_svg__c_476"
          x1="-643.386"
          y1="839.485"
          x2="-652.418"
          y2="833.417"
          gradientTransform="matrix(-.977 -.323 -.29 .877 -375.944 -928.287)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#41a247"></stop>
          <stop offset=".352" stopColor="#4ba74b"></stop>
          <stop offset=".956" stopColor="#67b554"></stop>
          <stop offset="1" stopColor="#69b655"></stop>
        </linearGradient>
      </defs>
      <path
        d="M16.62 30l-.751-.249s.1-3.8-1.275-4.067c-.9-1.048.133-44.741 3.423-.149a2.712 2.712 0 00-1.333 1.523A14.1 14.1 0 0016.62 30z"
        fill="url(#mongo_svg__a_474)"
      ></path>
      <path
        d="M17.026 26.329a13.223 13.223 0 005-13.225c-1.47-6.485-4.951-8.617-5.326-9.431a9.792 9.792 0 01-.825-1.6l.277 18.069s-.574 5.522.874 6.187z"
        fill="url(#mongo_svg__b_475)"
      ></path>
      <path
        d="M15.487 26.569S9.366 22.4 9.72 15.025a15.54 15.54 0 015.519-11.648A1.725 1.725 0 0015.846 2c.381.82.319 12.243.359 13.579.155 5.197-.289 10.009-.718 10.99z"
        fill="url(#mongo_svg__c_476)"
      ></path>
    </svg>
  );
}
