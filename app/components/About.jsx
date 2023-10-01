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
            OUR STORY
          </h1>
          <p className="leading-relaxed text-stone-400 mt-10 text-[.9rem]">
            On her way she met a copy. The copy warned the Little Blind Text,
            that where it came from it would have been rewritten a thousand
            times and everything that was left from its origin would be the word
            &quot;and&quot; and the Little Blind Text should turn around and
            return to its own, safe country. But nothing the copy said could
            convince her and so it didn’t take long until a few insidious Copy
            Writers ambushed her, made her drunk with Longe and Parole and
            dragged her into their agency, where they abused her for their.
          </p>
        </div>
      </div>
    </div>
  );
}
