"use client";
import { MdOutlineLocalShipping } from "react-icons/md";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import ProductImageGallery from "@/app/components/ProductDetail/ProductImageGallery";
import { IProduct } from "@/app/models/IProduct";
import { getSingleProduct } from "@/services/sanityFetch";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useStateContext } from "@/app/context/StateContext";
import Link from "next/link";
import { formatPrice } from "@/app/utils/formatPrice";

interface Props {
  params: { slug: string[] };
}

const ProductPage = ({ params: { slug } }: Props) => {
  const [product, setProduct] = useState<IProduct>();
  const {
    increaseQuantity,
    decreaseQuantity,
    quantity,
    setQuantity,
    addItemToCart,
  } = useStateContext();
  const slugId1 = slug[0];
  const slugId2 = slug[1];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productData: IProduct = await getSingleProduct(slugId2);
        setProduct(productData);
        setQuantity(1);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [slugId2]);
  return (
    <>
      <div className="flex max-md:flex-col gap-9 max-lg:gap-5">
        <div className="max-w-[800px] h-auto">
          <ProductImageGallery images={product?.images} />
        </div>
        <div className="flex flex-col max-w-[400px] gap-4 max-md:max-w-full">
          <p>{product?.categoryName}</p>
          <h2 className="text-2xl font-semibold">{product?.name}</h2>
          <h4 className="font-semibold">Kort om produkten</h4>
          <p className="text-base text-gray-800 tracking-wide">
            {product?.description}
          </p>
          <p className="text-4xl font-bold">{formatPrice(product?.price)}:-</p>
          <div className="flex items-center gap-2 text-gray-500">
            <MdOutlineLocalShipping size={28} />
            <span className="text-sm">Leverans 1-2 dagar</span>
          </div>

          <div className="flex items-center gap-1">
            <Button className="" onClick={decreaseQuantity}>
              <AiOutlineMinus />
            </Button>
            <Button className="">{quantity}</Button>
            <Button className="" onClick={increaseQuantity}>
              <AiOutlinePlus />
            </Button>
          </div>

          <div className="flex gap-3">
            <Button onClick={() => addItemToCart(product, quantity)}>
              Lägg i kundvagn
            </Button>
            <Link href="/checkout">
              <Button variant={"secondary"}>Gå till kassan</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
