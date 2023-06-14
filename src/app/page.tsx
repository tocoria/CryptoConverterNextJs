import dynamic from "next/dynamic";

const InputComponent = dynamic(() => import("../components/input"), {
  ssr: false,
});

const SelectComponent = dynamic(() => import("../components/select"), {
  ssr: false,
});

const ButtonComponent = dynamic(() => import("../components/button"), {
  ssr: false,
});

import Image from "next/image";

const OutputComponent = dynamic(() => import("../components/output"));

export default function Home() {
  return (
    <main className="bg-gray h-screen flex items-center justify-center">
      <div className="bg-black h-4/6 flex flex-col items-center justify-evenly w-5/6 rounded-xl">
        <h1 className="text-3xl font-bold text-white">Transfer</h1>

        {/* INPUT */}
        <section className="w-5/6 border border-gray h-20 rounded-lg flex items-center">
          <InputComponent />
          <div className="h-full flex w-4/12">
            <div className="border border-gray h-full"></div>
            <div className="bg-black text-white w-11/12 p-2 flex items-center justify-center">
              <Image
                src={`/flags/argentina.png`}
                width={30}
                height={30}
                alt="Argentina Flag"
                className="mx-1"
              />
              <span>ARS</span>
            </div>
          </div>
        </section>

        {/* OUTPUT */}
        <section className="w-5/6 border border-gray h-20 rounded-lg flex items-center">
          <OutputComponent />
          <div className="h-full flex w-4/12 relative">
            <div className="border border-gray h-full"></div>
            <SelectComponent />
          </div>
        </section>

        {/* BUTTON */}
        <h5 className="ada"></h5>
        <ButtonComponent />
      </div>
    </main>
  );
}
