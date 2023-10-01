export default function Navbar() {
  return (
    <div
      className={`absolute top-0 left-0 w-full z-50 border-b border-b-gray-500`}
    >
      <div className="flex items-center justify-between p-6 container mx-auto text-white">
        <div className="uppercase text-lg">logo</div>
        <div className="">
          <ul className="md:flex items-center gap-x-10 hidden">
            <li className="lato text-orange-50 font-medium cursor-pointer hover:text-white">
              Home
            </li>
            <li className="lato text-orange-50 font-medium cursor-pointer hover:text-white">
              Menu
            </li>
            <li className="lato text-orange-50 font-medium cursor-pointer hover:text-white">
              Services
            </li>
            <li className="lato text-orange-50 font-medium cursor-pointer hover:text-white">
              About
            </li>
            <li className="lato text-orange-50 font-medium cursor-pointer hover:text-white">
              Contact
            </li>
          </ul>
          <div className="md:hidden">Menu</div>
        </div>
      </div>
    </div>
  );
}
