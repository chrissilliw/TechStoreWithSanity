"use client";
import { Button } from "@/components/ui/button";
import { LuChevronLeftSquare } from "react-icons/lu";
import { RiShoppingBag3Line } from "react-icons/ri";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import toast from "react-hot-toast";
import React, { useCallback, useRef } from "react";
import { useStateContext } from "@/app/context/StateContext";
import Image from "next/image";
import { urlFor } from "@/app/lib/sanity";
import getStripe from "@/app/lib/getStripe";
import { loadStripe } from "@stripe/stripe-js";
// import fetch from "node-fetch";

const Cart = () => {
  const cartRef = useRef();
  const {
    cartItems,
    setShowCart,
    totalPrice,
    toggleCartItemQuantity,
    removeItemFromCart,
  } = useStateContext();

  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch("@/api/checkout_session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        cartItems.map((item) => {
          item: item;
        })
      ),
    });

    console.log("RESPONSE:", response);

    // if (response.status === 500) return;

    const data = await response.json();

    if (response.ok) {
      stripe?.redirectToCheckout({ sessionId: data.id });
    }

    // console.log("DATA:", data);

    // console.log(data.cartItems);
  };

  return (
    <>
      <div
        className="absolute top-0 w-full h-full overflow-y-hidden bg-gray-900 opacity-80 z-10"
        onClick={() => setShowCart(false)}
      ></div>
      <div className="absolute inset top-0 right-0 px-5 py-6 w-[500px] h-screen bg-slate-50 z-20">
        <button
          type="button"
          className="mb-8"
          onClick={() => setShowCart(false)}
        >
          <LuChevronLeftSquare size={32} />
        </button>
        <div className="flex flex-col w-full h-[90%]">
          {cartItems.length < 1 && (
            <div className="w-full h-full flex flex-col justify-center items-center">
              <RiShoppingBag3Line size={70} />
              <h3 className="mt-6">Din kundvagn är tom</h3>
            </div>
          )}

          <div className="">
            {cartItems.length >= 1 &&
              cartItems.map((item) => (
                <div className="flex gap-3 mb-6" key={item._id}>
                  <Image
                    src={urlFor(item?.images[0]).url()}
                    width={200}
                    height={200}
                    alt={item?.name}
                    className="w-[120px] height-auto bg-gray-200 rounded-lg"
                  />
                  <div className="w-full flex flex-col justify-between">
                    <div className="flex top justify-between">
                      <h4 className="text-sm font-semibold w-[230px]">
                        {item.name}
                      </h4>
                      <h4>{item.price * item.quantity}:-</h4>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex gap-1">
                        <Button
                          className=""
                          size="sm"
                          onClick={() =>
                            toggleCartItemQuantity(item._id, "decrement")
                          }
                        >
                          <AiOutlineMinus />
                        </Button>
                        <Button className="pointer-events-none" size="sm">
                          {item.quantity}
                        </Button>
                        <Button
                          className=""
                          size="sm"
                          onClick={() =>
                            toggleCartItemQuantity(item._id, "increment")
                          }
                        >
                          <AiOutlinePlus />
                        </Button>
                      </div>

                      <button
                        type="button"
                        className="w-10 h-10 flex justify-center items-center rounded-full bg-red-700"
                        onClick={() => removeItemFromCart(item)}
                      >
                        <RiDeleteBin6Line size={24} color="white" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          {cartItems.length >= 1 && (
            <div className="">
              <div className="h-[4px] w-full bg-slate-700 my-4 rounded-sm"></div>
              <div className="flex justify-between">
                <h3 className="text-lg font-semibold">Totalbelopp</h3>
                <h3 className="text-lg font-semibold">{totalPrice}</h3>
              </div>
              <Button
                className="mt-6 w-full rounded-full"
                onClick={handleCheckout}
              >
                Kassa
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
