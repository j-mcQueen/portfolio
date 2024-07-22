export default function Design({ ...props }) {
  const { className } = props;

  return (
    <svg
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      fill="#fff"
      className={className}
    >
      <path d="M247-139q-45 0-84.5-20.5T96-215q31-2 53-23t22-52q0-48 33-80.5t81-32.5q47 0 79.5 33t32.5 80q0 63-43.5 107T247-139Zm236-237L381-478l319-319q14-14 34-14t34 14l34 34q14 14 14 33.5T802-696L483-376Z" />
    </svg>
  );
}
