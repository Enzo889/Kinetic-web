import { CoolMode } from "@/app/components/cool-mode";
import { SpinningText } from "@/app/components/spining-text";
import Spline from "@splinetool/react-spline";

export const TabsList = [
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
      <div className="w-full flex flex-col gap-10 overflow-hidden relative h-full rounded-2xl  p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#0B090A] to-[#161A1D]">
        <p>Spinning Text</p>
        <SpinningText
          radius={5}
          fontSize={1.2}
          className="font-medium leading-none flex justify-center items-center w-full h-full "
        >
          {`IES 9-021 • IES 9-021 • IES 9-021 • `}
        </SpinningText>
      </div>
    ),
  },
  {
    title: "Cool Mode",
    value: "contact",
    content: (
      <div className="w-full flex flex-col gap-10 overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#0B090A] to-[#161A1D]">
        <p>Cool Mode</p>
        <div className="relative flex justify-center items-center h-screen">
          <CoolMode
            options={{
              particle:
                "http://ies9021.mendoza.edu.ar/pluginfile.php?file=%2F1%2Fcore_admin%2Flogocompact%2F100x100%2F1728588466%2F400x400png.png",
            }}
          >
            <button className="relative overflow-hidden rounded-md bg-[#D3D3D3] px-5 py-2.5 text-[#161A1D] transition-all duration-300 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:-translate-y-1 active:scale-x-90 active:scale-y-110">
              Click me
            </button>
          </CoolMode>
        </div>
      </div>
    ),
  },
];
