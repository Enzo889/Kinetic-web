import { Header } from "./components/Header";
import { Tabs } from "./components/tabs";

import { TabsList } from "@/constant/tab";

export default function Home() {
  return (
    <main className="w-full h-full ">
      <div className="flex items-center h-screen justify-between ">
        <Header />
        <main className="h-[20rem] md:h-[40rem] [perspective:1000px] relative  flex flex-col max-w-5xl mx-auto w-full  items-start justify-start  mt-40 ">
          <Tabs tabs={TabsList} />
        </main>
      </div>
    </main>
  );
}
