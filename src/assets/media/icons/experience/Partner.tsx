export default function Partner({ ...props }) {
  const { className } = props;

  return (
    <svg
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      fill="#fff"
      className={className}
    >
      <path d="M480-624 360-744l120-120 120 120-120 120ZM48-192v-168q0-30 21-51t51-21h133q18 0 33 8.5t26 22.5q29 42 73 65.5t95 23.5q51 0 95-23.5t73-65.5q11-14 26-22.5t33-8.5h133q30 0 51 21t21 51v168H624v-90q-31 23-68.5 32.5T480-240q-38 0-75-9.5T336-282v90H48Zm120-288q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm624 0q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Z" />
    </svg>
  );
}
