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

export default function Home() {
  return (
    <main className="bg-gray h-screen flex items-center justify-center">
      <div className="bg-black h-4/6 flex flex-col items-center justify-evenly w-5/6 rounded-xl">
        <h1 className="text-3xl font-bold text-white">Transfer</h1>

        {/* INPUT */}
        <section className="w-5/6 border border-gray h-20 rounded-lg flex items-center">
          <InputComponent />
          <div className="h-full">
            <div className="border border-gray h-full"></div>
            <div></div>
          </div>
        </section>

        {/* OUTPUT */}
        <section className="w-5/6 border border-gray h-20 rounded-lg flex items-center">
          <div className="w-8/12 h-4/6 bg-black text-white text-2xl font-bold px-3 flex items-center">
            1323648
          </div>
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
