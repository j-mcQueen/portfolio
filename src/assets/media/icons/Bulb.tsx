export default function Bulb({ ...props }) {
  const { className } = props;

  return (
    <svg
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      fill="#FFF"
      className={className}
    >
      <path d="M479.79-96Q450-96 429-117.15T408-168h144q0 30-21.21 51t-51 21ZM336-216v-72h288v72H336Zm-15-120q-62-38-95.5-102.5T192-576q0-120 84-204t204-84q120 0 204 84t84 204q0 73-33.5 137.5T639-336H321Zm23-72h272q38-31 59-75t21-93q0-90.33-62.77-153.16-62.77-62.84-153-62.84Q390-792 327-729.16 264-666.33 264-576q0 49 21 93t59 75Zm136 0Z" />
    </svg>
  );
}
