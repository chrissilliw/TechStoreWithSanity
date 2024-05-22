import HeaderBanner from "./components/Banner/HeaderBanner";
import SalesGrid from "./components/Sales/SalesGrid";
import CategoryGrid from "./components/Categories/CategoryGrid";
import SaleBanner from "./components/Banner/SaleBanner";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <>
      <HeaderBanner />
      <SalesGrid />
      <CategoryGrid />
      <SaleBanner />
    </>
  );
}
