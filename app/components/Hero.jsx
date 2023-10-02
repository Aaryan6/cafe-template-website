import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative h-[calc(100vh-2rem)] bg-black z-0">
      <Image
        src="/coffee.webp"
        alt=""
        width={954}
        height={954}
        className="h-full w-full opacity-30 object-cover absolute top-0 left-0 -z-10"
      />
      <div className="z-10 text-white flex flex-col justify-center items-center h-full text-center">
        <h1 className="cursive text-orange-200 text-3xl md:text-4xl mt-20">
          Welcome
        </h1>
        <h1 className="lato text-3xl md:text-4xl font-semibold tracking-wide max-w-xl mx-auto leading-snug">
          YOU’LL LOVE OUR BUNS!
        </h1>
        <p className="max-w-3xl mx-auto mt-4 text-sm md:text-base px-4">
          Baker’s Bakery is a modern day “Hash House” that serves the #1
          breakfast in South Dakota- according to Everyday with Rachel Ray
          Magazine (March 2014 issue).
        </p>
        <div className="flex flex-col md:flex-row gap-x-6 mt-10">
          <button className="py-3 px-6 mb-5 md:mb-0 bg-orange-300 border border-orange-300 text-black text-sm">
            ORDER NOW
          </button>
          <button className="py-3 px-6 border text-sm">VIEW MENU</button>
        </div>
      </div>
    </div>
  );
}
