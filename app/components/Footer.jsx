import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="container mx-auto pt-12 p-8 text-white">
        <div className="grid grid-cols-1 md:grid-cols-4 justify-between gap-x-4">
          <div className="">
            <div className="mb-4">
              <h2 className="lato uppercase text-xl tracking-wider font-medium">
                About Us
              </h2>
              <p className="text-gray-500 mt-2">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
            <ul className="list-none p-0">
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-500 hover:text-primary transition duration-300"
                >
                  <span className="icon-twitter"></span>
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-500 hover:text-primary transition duration-300"
                >
                  <span className="icon-facebook"></span>
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-500 hover:text-primary transition duration-300"
                >
                  <span className="icon-instagram"></span>
                </a>
              </li>
            </ul>
          </div>

          <div className="">
            <div className="mb-4">
              <h2 className="lato uppercase text-xl tracking-wider font-medium">
                Recent Blog
              </h2>
            </div>
            <div className="mb-4 flex">
              <a
                href="#"
                className="mr-4 bg-cover w-16 h-16"
                style={{ backgroundImage: "url(menu-1.webp)" }}
              ></a>
              <div className="flex-1">
                <h3 className="">
                  <a href="#">
                    Even the all-powerful Pointing has no control about
                  </a>
                </h3>
                <div className="text-sm">
                  <div>
                    <a href="#" className="text-gray-500">
                      <span className="icon-calendar"></span> Sept 15, 2018
                    </a>
                  </div>
                  <div>
                    <a href="#" className="text-gray-500">
                      <span className="icon-person"></span> Admin
                    </a>
                  </div>
                  <div>
                    <a href="#" className="text-gray-500">
                      <span className="icon-chat"></span> 19
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-4 flex">
              <a
                href="#"
                className="mr-4 bg-cover w-16 h-16"
                style={{ backgroundImage: "url(menu-2.webp)" }}
              ></a>
              <div className="flex-1">
                <h3 className="">
                  <a href="#">
                    Even the all-powerful Pointing has no control about
                  </a>
                </h3>
                <div className="text-sm">
                  <div>
                    <a href="#" className="text-gray-500">
                      <span className="icon-calendar"></span> Sept 15, 2018
                    </a>
                  </div>
                  <div>
                    <a href="#" className="text-gray-500">
                      <span className="icon-person"></span> Admin
                    </a>
                  </div>
                  <div>
                    <a href="#" className="text-gray-500">
                      <span className="icon-chat"></span> 19
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-xs md:mx-auto">
            <div className="mb-4">
              <h2 className="lato uppercase text-xl tracking-wider font-medium">
                Services
              </h2>
            </div>
            <ul className="p-0">
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-500 hover:text-primary transition duration-300 py-2 block"
                >
                  Cooked
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-500 hover:text-primary transition duration-300 py-2 block"
                >
                  Deliver
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-500 hover:text-primary transition duration-300 py-2 block"
                >
                  Quality Foods
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-500 hover:text-primary transition duration-300 py-2 block"
                >
                  Mixed
                </a>
              </li>
            </ul>
          </div>

          <div className="">
            <div className="mb-4">
              <h2 className="lato uppercase text-xl tracking-wider font-medium">
                Have a Questions?
              </h2>
            </div>
            <div className="mb-3">
              <ul className="p-0">
                <li className="mb-2 flex items-center">
                  <span className="text-gray-500">
                    203 Fake St. Mountain View, San Francisco, California, USA
                  </span>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="text-gray-500 hover:text-primary transition duration-300"
                  >
                    <span className="">+2 392 3929 210</span>
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="text-gray-500 hover:text-primary transition duration-300"
                  >
                    <span className="icon icon-envelope"></span>
                    <span className="">info@yourdomain.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="md:flex md:flex-wrap md:-mx-4 mt-4">
          <div className="md:w-full px-4 text-sm md:text-base text-center">
            <p className="text-gray-500">
              Copyright &copy; {new Date().getFullYear()} All rights reserved |
              This template is made with by{" "}
              <a
                href="https://developeraaryan.me"
                target="_blank"
                className="underline"
              >
                Aaryan
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
