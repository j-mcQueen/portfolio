export default function Outward({ ...props }) {
  const { className } = props;

  return (
    <svg
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      fill="#FFF"
      className={className}
    >
      <path d="m243-240-51-51 405-405H240v-72h480v480h-72v-357L243-240Z" />
    </svg>
  );
}
