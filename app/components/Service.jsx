import Image from "next/image";

export default function Service() {
  return (
    <div className="bg-orange-300 text-black p-10 py-16 md:py-28">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-6 md:gap-y-0 max-w-6xl mx-auto">
        <div className="max-w-sm mx-auto text-center">
          <Image
            width={50}
            height={50}
            src="https://img.icons8.com/dotty/80/purchase-order.png"
            alt="shipped"
            className="mx-auto w-16 h-16 mb-3"
          />
          <h1 className="md:text-lg font-medium mb-2">EASY TO ORDER</h1>
          <p className="text-sm md:text-base">
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic.
          </p>
        </div>
        <div className="max-w-sm mx-auto text-center">
          <Image
            width={50}
            height={50}
            src="https://img.icons8.com/ios/50/shipped.png"
            alt="shipped"
            className="mx-auto w-16 h-16 mb-3"
          />
          <h1 className="md:text-lg font-medium mb-2">FASTEST DELIVERY</h1>
          <p className="text-sm md:text-base">
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic.
          </p>
        </div>
        <div className="max-w-sm mx-auto text-center">
          <Image
            width={50}
            height={50}
            src="https://img.icons8.com/ios/50/coffee-beans-.png"
            alt="shipped"
            className="mx-auto w-16 h-16 mb-3"
          />
          <h1 className="md:text-lg font-medium mb-2">QUALITY COFFEE</h1>
          <p className="text-sm md:text-base">
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic.
          </p>
        </div>
      </div>
    </div>
  );
}
