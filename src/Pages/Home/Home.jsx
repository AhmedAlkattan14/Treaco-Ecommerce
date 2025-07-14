import { Helmet } from "react-helmet";
import BrandsSec from "../../Components/BrandsSec/BrandsSec";
import BrowseCategory from "../../Components/BrowseCategory/BrowseCategory";
import CategorySlider from "../../Components/CategorySlider/CategorySlider";
import FlashSale from "../../Components/FlashSale/FlashSale";
import HeaderSlider from "../../Components/HeaderSlider/HeaderSlider";
import TrendingProduct from "../../Components/TrendingProduct/TrendingProduct";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Treaco </title>
      </Helmet>
      {/* header  slider  */}
      <HeaderSlider />
      {/* End header  slider  */}
      <div className="max-w-7xl  mx-auto">
        {/* Flash Sale */}
        <FlashSale />
        {/* End Flash Sale */}
        {/* category */}
        <CategorySlider />
        {/* End category */}
        {/* announcement */}
        <>
          {/* Announcement Banner */}
          <div className="bg-linear-to-r from-red-500 via-purple-400 to-blue-500">
            <div className="max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 mx-auto">
              {/* Grid */}
              <div className="grid justify-center md:grid-cols-2 md:justify-between md:items-center gap-2">
                <div className="text-center md:text-start">
                  <p className="text-xs text-white/80 uppercase">
                    Smart Shopping Experience – Preview Now
                  </p>
                  <p className="mt-1 text-white font-medium">
                    Sign up to get unlimited updates. No credit card required.
                  </p>
                </div>
                {/* End Col */}
                <div className="mt-3 text-center md:text-start md:flex md:justify-end md:items-center">
                  <a
                    className="py-2 px-3 md:py-3 md:px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                    href="#"
                  >
                    Sign up free
                  </a>
                </div>
                {/* End Col */}
              </div>
              {/* End Grid */}
            </div>
          </div>
          {/* End Announcement Banner */}
        </>

        {/*end announcement */}
        {/* browse by category */}
        <h1 className="text-2xl font-bold mt-12  w-fit relative before:absolute before:-bottom-2 before:w-1/2 before:h-1 before:bg-gradient-to-r before:from-red-500 before:via-purple-400 before:to-blue-500">
          Browse category
        </h1>
        <BrowseCategory />
        {/* end browse by category */}
        {/* browse by category */}
        <h1 className="text-2xl font-bold mt-12   w-fit  relative before:absolute before:-bottom-2 before:w-1/2 before:h-1 before:bg-gradient-to-r before:from-red-500 before:via-purple-400 before:to-blue-500">
          Trending Products{" "}
        </h1>
        <TrendingProduct />
        {/* end browse by category */}
        {/* brands section */}
        <h1 className="text-2xl font-bold mt-12  w-fit  relative before:absolute before:-bottom-2 before:w-1/2 before:h-1 before:bg-gradient-to-r before:from-red-500 before:via-purple-400 before:to-blue-500">
          Brands
        </h1>
        <BrandsSec />

        {/* end brands section */}
      </div>
    </>
  );
}
//  CategorySlider
