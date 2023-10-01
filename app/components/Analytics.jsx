import Image from "next/image";

export default function Analytics() {
  return (
    <div className="relative p-6 py-16">
      <Image
        src="/coffee.webp"
        alt=""
        width={954}
        height={954}
        className="absolute top-0 left-0 w-full h-full object-cover brightness-[.3] -z-10"
      />
      <div className="container mx-auto z-10 text-white">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-8 md:gap-y-0 max-w-6xl mx-auto">
          <div className="max-w-sm mx-auto text-center">
            <h1 className="text-2xl text-orange-300 font-medium mb-2">100</h1>
            <p>Coffee Branches</p>
          </div>
          <div className="max-w-sm mx-auto text-center">
            <h1 className="text-2xl text-orange-300 font-medium mb-2">85</h1>
            <p>Number of Awards</p>
          </div>
          <div className="max-w-sm mx-auto text-center">
            <h1 className="text-2xl text-orange-300 font-medium mb-2">
              10,567
            </h1>
            <p>Happy Customer</p>
          </div>
          <div className="max-w-sm mx-auto text-center">
            <h1 className="text-2xl text-orange-300 font-medium mb-2">900</h1>
            <p>Staff</p>
          </div>
        </div>
      </div>
    </div>
  );
}
