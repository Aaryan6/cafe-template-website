import React from "react";

const CoffeeMenu = () => {
  const menuItems = [
    {
      image: "/menu-1.webp",
      name: "Coffee Cappuccino",
      description:
        "A small river named Duden flows by their place and supplies",
      price: "$5.90",
    },
    {
      image: "/menu-2.webp",
      name: "Coffee Cappuccino",
      description:
        "A small river named Duden flows by their place and supplies",
      price: "$5.90",
    },
    {
      image: "/menu-3.webp",
      name: "Coffee Cappuccino",
      description:
        "A small river named Duden flows by their place and supplies",
      price: "$5.90",
    },
    {
      image: "/coffee.webp",
      name: "Coffee Cappuccino",
      description:
        "A small river named Duden flows by their place and supplies",
      price: "$5.90",
    },
  ];

  return (
    <div className="max-w-[70rem] mx-auto p-6 py-16">
      <div className="text-center mb-10">
        <span className="cursive text-4xl text-orange-300">Discover</span>
        <h2 className="lato text-3xl font-bold text-white leading-3">
          Best Coffee Sellers
        </h2>
        <p className="text-gray-300 mt-6 max-w-xl mx-auto">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {menuItems.map((item, index) => (
          <div key={index} className="overflow-hidden text-center">
            <img
              className="w-full h-48 object-cover"
              src={item.image}
              alt={item.name}
            />
            <div className="p-4">
              <h3 className="text-xl text-white font-semibold">{item.name}</h3>
              <p className="text-gray-300 text-sm mt-2">{item.description}</p>
              <div className="flex flex-col justify-between items-center mt-4">
                <span className="text-lg text-orange-300 font-semibold">
                  {item.price}
                </span>
                <button className="px-4 py-2 bg-primary text-orange-300 border border-orange-300 mt-3 hover:bg-primary-dark focus:outline-none focus:ring focus:ring-primary-dark">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoffeeMenu;
