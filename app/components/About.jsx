import Image from "next/image";

export default function About() {
  return (
    <div className="md:h-screen flex flex-col md:flex-row text-white">
      <div className="md:w-1/2">
        <Image
          src="/about.webp"
          alt=""
          width={1000}
          height={666}
          className="h-full aspect-square md:aspect-auto w-auto"
        />
      </div>
      <div className="md:w-1/2 flex items-center">
        <div className="max-w-xl px-6 md:px-16 p-16 bg-black bg-opacity-40 md:-ml-20">
          <h1 className="cursive text-orange-200 text-4xl md:text-5xl">
            Discover
          </h1>
          <h1 className="text-4xl md:text-[2.7rem] font-semibold leading-3">
            ABOUT US
          </h1>
          <p className="leading-relaxed text-stone-400 mt-10 text-[.95rem]">
            Baker’s Bakery is a modern day “Hash House” that serves the #1
            breakfast in South Dakota- according to Everyday with Rachel Ray
            Magazine (March 2014 issue). We have a full breakfast and lunch menu
            as well as fresh pastries, donuts, and espresso bar. Everything is
            served on or with homemade bread and we guarantee “YOU’LL LOVE OUR
            BUNS!”
          </p>
        </div>
      </div>
    </div>
  );
}
