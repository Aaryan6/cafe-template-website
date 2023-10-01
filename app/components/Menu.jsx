import Image from "next/image";

export default function Menu() {
  return (
    <div className="flex flex-col md:flex-row py-8 px-4 md:py-0 md:px-0">
      <div className="md:w-1/2 text-white">
        <div className="md:h-screen flex flex-col justify-center md:text-right mr-10">
          <h1 className="cursive text-orange-200 text-4xl md:text-5xl">
            Discover
          </h1>
          <h1 className="text-[2.3rem] md:text-[2.7rem] font-semibold leading-3">
            OUR MENU
          </h1>
          <p className="text-white text-[.95rem] font-light md:max-w-md ml-auto mt-8">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean
          </p>
          <button className="mt-8 border border-orange-300 text-orange-300 w-fit py-4 px-6 md:ml-auto text-sm">
            View Full Menu
          </button>
        </div>
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0 flex items-center">
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/menu-1.webp"
            alt=""
            width={1263}
            height={1263}
            className="w-64 aspect-square object-cover"
          />
          <Image
            src="/coffee.webp"
            alt=""
            width={954}
            height={954}
            className="w-64 aspect-square object-cover"
          />
          <Image
            src="/menu-2.webp"
            alt=""
            width={800}
            height={800}
            className="w-64 aspect-square object-cover"
          />
          <Image
            src="/menu-3.webp"
            alt=""
            width={800}
            height={800}
            className="w-64 aspect-square object-cover"
          />
        </div>
      </div>
    </div>
  );
}
