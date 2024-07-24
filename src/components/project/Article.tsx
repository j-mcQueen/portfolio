import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Article({ ...props }) {
  const { data } = props;
  const [targetLink, setTargetLink] = useState("");

  return (
    <main className="p-5 grid grid-cols-2">
      <section className="sticky">
        <Sidebar data={data} setTargetLink={setTargetLink} />
      </section>

      <section>
        <Header data={data} />
      </section>
    </main>
  );
}
