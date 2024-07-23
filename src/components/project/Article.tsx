import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Article({ ...props }) {
  const { data } = props;

  return (
    <main className="p-5 grid grid-cols-2">
      <section>
        <Sidebar />
      </section>

      <section>
        <Header title={data.title} repo={data.repo} live={data.live} />
      </section>
    </main>
  );
}
