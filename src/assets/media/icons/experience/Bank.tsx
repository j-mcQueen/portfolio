export default function Bank({ ...props }) {
  const { className } = props;

  return (
    <svg
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      fill="#fff"
      className={className}
    >
      <path d="M192-264v-312h72v312h-72Zm252 0v-312h72v312h-72ZM96-144v-72h768v72H96Zm600-120v-312h72v312h-72ZM96-624v-96l384-192 384 192v96H96Z" />
    </svg>
  );
}
