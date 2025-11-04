import React from "react";

export default function Menu() {
  const drinkMenu = [
    { name: "Espresso", price: "$5.5" },
    { name: "Cappcino", price: "$5.0" },
    { name: "Flat White", price: "$5.0" },
    { name: "Long Black", price: "$5.0" },
    { name: "Chai Latte", price: "$5.0" },
    { name: "Macha Latte", price: "$5.5" },
    { name: "Iced Latte", price: "$6.0" },
    { name: "Iced Mocha", price: "$6.0" },
    { name: "Fresh Juice", price: "$8.0" },
    { name: "Smoothie", price: "$8.0" },
  ];
  const foodMenu = [
    { name: "Soup of the day", price: "$15" },
    { name: "Egg's and Toast", price: "$12" },
    { name: "Chicken Wrap", price: "$15" },
    { name: "Homemade Granola", price: "$12" },
    { name: "Fruits Waffle", price: "$18" },
    { name: "Homemade Quiche", price: "$14" },
    { name: "Beef Burgar", price: "$22" },
  ];

  return (
    <div className="container">
      <h3 className="text-5xl font-quattro font-ultra mb-3">Menu</h3>
      <h2 className="text-2xl font-outfit font-bold mb-3">Coffee</h2>

      {drinkMenu.map((service, index) => (
        <div
          className="flex justify-between font-outfit text-2xl font-light"
          key={index}
        >
          <p className="mb-1">{service.name}</p>
          <p>{service.price}</p>
        </div>
      ))}
      <h2 className="text-2xl font-outfit font-bold mb-3 mt-6">Food</h2>

      {foodMenu.map((service, index) => (
        <div
          className="flex justify-between font-outfit text-2xl font-light"
          key={index}
        >
          <p className="mb-1">{service.name}</p>
          <p>{service.price}</p>
        </div>
      ))}
    </div>
  );
}
