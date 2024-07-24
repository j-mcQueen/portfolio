import { useState } from "react";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Post from "./Post";

export default function Article({ ...props }) {
  const { data } = props;
  const [targetLink, setTargetLink] = useState("");

  return (
    <main className="p-5 grid xl:grid-cols-[0.25fr,0.75fr]">
      <section className="xl:fixed col-start-1 row-span-2">
        <Sidebar data={data} setTargetLink={setTargetLink} />
      </section>

      <section className="col-start-2 row-start-1 row-end-1">
        <Header data={data} />
      </section>

      <section className="col-start-2 row-start-2 flex flex-col">
        <Post data={data} targetLink={targetLink} />
      </section>
    </main>
  );
}
