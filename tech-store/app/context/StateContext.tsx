"use client";
import { createContext, useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { ICartItem } from "../models/ICartItem";

interface StateContextType {
  showCart: boolean; //Show or hide Cart from right side
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
  openMenu: boolean; //Show or hide Cart from right side
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
  cartItems: any[];
  setCartItems: React.Dispatch<React.SetStateAction<any[]>>;
  totalPrice: number;
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
  totalQuantities: number;
  setTotalQuantities: React.Dispatch<React.SetStateAction<number>>;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
  addItemToCart: (product: any, quantity: number) => void;
  toggleCartItemQuantity: (id: string, value: any) => void;
  removeItemFromCart: (product: ICartItem) => void;
}

interface StateContextProviderProps {
  children: React.ReactNode;
}

const StateContext = createContext<StateContextType>({
  showCart: false, // Boolean value for showing Cart
  setShowCart: () => {},
  openMenu: false, // Boolean value for showing Mobile Menu
  setOpenMenu: () => {},
  cartItems: [], // Empty Array for numbers of items in Cart
  setCartItems: () => {},
  totalPrice: 0, // Total price of Cart
  setTotalPrice: () => {},
  totalQuantities: 0, // Total quantity of items in Cart
  setTotalQuantities: () => {},
  quantity: 1,
  setQuantity: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
  addItemToCart: () => {},
  toggleCartItemQuantity: () => {},
  removeItemFromCart: () => {},
});

export const useStateContext = () => useContext(StateContext);

export const StateContextProvider = ({
  children,
}: StateContextProviderProps) => {
  const [showCart, setShowCart] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [quantity, setQuantity] = useState(1);

  let foundProduct: any;
  let index: number;

  // Adding item to Cart
  const addItemToCart = (product: ICartItem, quantity: number) => {
    const checkProductInCart = cartItems.find(
      (item) => item._id === product._id
    );

    setTotalPrice(
      (previousTotalPrice) => previousTotalPrice + product.price * quantity
    );
    setTotalQuantities(
      (previousTotalQuantities) => previousTotalQuantities + quantity
    );

    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
      });

      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;

      setCartItems([...cartItems, { ...product }]);
    }

    toast.success(`${quantity} ${product.name} added to the cart`);
  };

  //Removing item from Cart
  const removeItemFromCart = (product: ICartItem) => {
    foundProduct = cartItems.find((item) => item._id === product._id);
    const filteredCartItems = cartItems.filter(
      (item) => item._id !== product._id
    );

    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - foundProduct.price * foundProduct.quantity
    );
    setTotalQuantities(
      (prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity
    );
    setCartItems(filteredCartItems);
  };

  const toggleCartItemQuantity = (id: string, value: any) => {
    foundProduct = cartItems.find((item) => item._id === id);
    index = cartItems.findIndex((product) => product._id === id);

    const filteredCartItems = cartItems.filter((item) => item._id !== id);

    if (value === "increment") {
      let newCartItems = [
        ...filteredCartItems,
        { ...foundProduct, quantity: foundProduct.quantity + 1 },
      ];
      setCartItems(newCartItems);
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
    } else if (value === "decrement") {
      if (foundProduct.quantity > 1) {
        let newCartItems = [
          ...filteredCartItems,
          { ...foundProduct, quantity: foundProduct.quantity - 1 },
        ];
        setCartItems(newCartItems);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
      }
    }
  };

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => {
      if (prevQuantity - 1 < 1) return 1;

      return prevQuantity - 1;
    });
  };

  const value: StateContextType = {
    showCart,
    setShowCart,
    openMenu,
    setOpenMenu,
    cartItems,
    setCartItems,
    totalPrice,
    setTotalPrice,
    totalQuantities,
    setTotalQuantities,
    quantity,
    setQuantity,
    increaseQuantity,
    decreaseQuantity,
    addItemToCart,
    toggleCartItemQuantity,
    removeItemFromCart,
  };

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};
