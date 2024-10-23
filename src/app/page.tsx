import Spline from "@splinetool/react-spline";
import { Header } from "./components/Header";
import { Tabs } from "./components/tabs";
import { SpinningText } from "./components/spining-text";

export default function Home() {
  return (
    <main className="w-full h-full ">
      <div className="flex items-center h-screen justify-between ">
        <Header />
        <main className="h-[20rem] md:h-[40rem] [perspective:1000px] relative  flex flex-col max-w-5xl mx-auto w-full  items-start justify-start  mt-40 ">
          <Tabs
            tabs={[
              {
                title: "Hello Distorting",
                value: "product",
                content: (
                  <div className="w-full  flex flex-col gap-10 overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl  font-bold text-white bg-gradient-to-br from-[#0B090A] to-[#161A1D]">
                    <p>Hello Distorting</p>

                    <Spline
                      className="border border-[#161A1D]"
                      scene="https://prod.spline.design/AaRUTySd4twGAAIH/scene.splinecode"
                    />
                  </div>
                ),
              },
              {
                title: "Putterfish",
                value: "services",
                content: (
                  <div className="w-full flex flex-col gap-10 overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#0B090A] to-[#161A1D]">
                    <p>Putterfish</p>
                    <Spline
                      className="border border-[#161A1D]"
                      scene="https://prod.spline.design/avqpoNifVn3shW7b/scene.splinecode"
                    />
                  </div>
                ),
              },
              {
                title: "Spinning Text",
                value: "about",
                content: (
                  <div className="w-full flex flex-col gap-10 overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#0B090A] to-[#161A1D]">
                    <p>Spinning Text</p>
                    <SpinningText
                      radius={5}
                      fontSize={1.2}
                      className="font-medium leading-none "
                    >
                      {`pre-order • pre-order • pre-order • `}
                    </SpinningText>
                  </div>
                ),
              },
            ]}
          />
        </main>
      </div>
    </main>
  );
}
