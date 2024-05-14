import HeaderBanner from "./components/Banner/HeaderBanner";
import SalesGrid from "./components/Sales/SalesGrid";
import CategoryGrid from "./components/Categories/CategoryGrid";
import SaleBanner from "./components/Banner/SaleBanner";

export default function Home() {
  return (
    <>
      <HeaderBanner />
      <SalesGrid />
      <CategoryGrid />
      <SaleBanner />
    </>
  );
}
