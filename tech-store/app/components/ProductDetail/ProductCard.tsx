// "use client";
// import { IProduct } from "@/app/models/IProduct";
// import { getSingleProduct } from "@/services/sanityFetch";
// import React, { useEffect, useState } from "react";

// interface Props {
//   params: { slug: string };
// }

// const ProductCard = ({ params: { slug } }: Props) => {
//   const [product, setProduct] = useState<IProduct>();
//   const slugId = slug;

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const productData: IProduct = await getSingleProduct(slugId);
//         setProduct(productData);
//       } catch (error) {
//         console.error("Error fetching data: ", error);
//       }
//     };

//     fetchData();
//   }, []);
//   return (
//     <>
//       <h3>{product?.name}</h3>
//     </>
//   );
// };

// export default ProductCard;
