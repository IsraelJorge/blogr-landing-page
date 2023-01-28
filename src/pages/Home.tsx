import { Header } from "../components/Header";

export function Home() {
  return (
    <div>
      <Header />
      <div className="w-full h-[500px] bg-primary-red_400 bg-[url(../assets/bg-pattern-intro-desktop.svg)] bg-no-repeat  bg-200% bg-center flex flex-col items-center justify-center text-neutral-white absolute top-0 rounded-bl-[100px]">
        <h1 className="font-semibold text-6xl mb-4">
          A modern publishing platform
        </h1>

        <h3> Grow your audience and build your online brand</h3>

        <div className="flex items-center justify-center gap-5 font-ubunto text-sm font-semibold mt-10">
          <button className="bg-neutral-white text-primary-red_400 px-3 py-2 rounded-full hover:text-neutral-white hover:bg-red-300 transition-colors">
            Start for Free
          </button>
          <button className="px-3 py-2 rounded-full border border-neutral-white hover:bg-neutral-white hover:text-red-300 transition-colors">
            Learn More
          </button>
        </div>
      </div>

      <div className=""></div>
    </div>
  );
}
