import React from "react";

const Cart = () => {
  const cartItems = [
    { name: "Burger", price: 35, qty: 1, total: 35, img: "/cart1.png" },
    { name: "Fresh Lime", price: 25, qty: 1, total: 25, img: "/lime.png" },
    { name: "Pizza", price: 19, qty: 1, total: 19, img: "/cart3.png" },
    { name: "Chocolate Muffin", price: 45, qty: 1, total: 45, img: "/muffin.png" },
    { name: "Cheese Butter", price: 15, qty: 1, total: 15, img: "/cheese.png" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-center text-2xl">Shopping Cart</h1>
      </header>

      {/* Cart */}
      <main className="flex-grow p-4 container mx-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, idx) => (
              <tr key={idx} className="border-t">
                <td className="flex items-center space-x-4">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-12 h-12 rounded"
                  />
                  <span>{item.name}</span>
                </td>
                <td>${item.price}</td>
                <td>
                  <div className="flex items-center space-x-2">
                    <button className="px-2 py-1 bg-gray-200">-</button>
                    <span>{item.qty}</span>
                    <button className="px-2 py-1 bg-gray-200">+</button>
                  </div>
                </td>
                <td>${item.total}</td>
                <td>
                  <button className="text-red-500">X</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Total */}
        <div className="flex justify-between mt-6">
          <input
            type="text"
            placeholder="Enter your coupon code here"
            className="border  text-black p-2 w-1/3"
          />
          <div className="space-y-2">
            <div>Subtotal: $120.00</div>
            <div>Shipping: $30.00</div>
            <div className="font-bold">Total: $150.00</div>
            <button className="bg-orange-500 text-white px-4 py-2 rounded">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </main>

</div>
  );
};

export default Cart;

