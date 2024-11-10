export default function Bolt({ ...props }) {
  const { className } = props;

  return (
    <svg
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      fill="#fff"
      className={className}
    >
      <path d="m336-96 48-264H192l324-504h72l-36 312h216L408-96h-72Z" />
    </svg>
  );
}
