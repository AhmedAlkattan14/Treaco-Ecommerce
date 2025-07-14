import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import { CartProvider } from "../../Context/Cart.context";
import { useContext } from "react";

export default function Navbar() {
const {cartLength ,favoritesLength} = useContext(CartProvider);
  return (
    <>
      <>
        {/* ========== HEADER ========== */}
        <header className="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-48 w-full  border-b border-gray-200 text-sm py-2.5  bg-white shadow-sm ">
          <nav className="max-w-[85rem]   flex md:grid md:grid-cols-3 md:gap-x-1 basis-full items-center w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="w-fit   ">
              {/* Logo */}
              <Link
                className="flex-none rounded-md "
                to="/"
                aria-label="Preline"
              >
                <img src={logo} className=" object-cover " alt="logo" />
              </Link>
              {/* End Logo */}
            </div>
            <div className="hidden md:block">
              {/* Search Input */}
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5">
                  <svg
                    className="shrink-0 size-4 text-gray-400 dark:text-white/60"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx={11} cy={11} r={8} />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </div>
                <input
                  type="text"
                  className="py-2 ps-10 pe-16  border block w-full bg-transparent border-gray-700 rounded-lg text-sm focus:outline-hidden focus:border-gray-600 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-400 dark:placeholder:text-neutral-400 dark:focus:border-neutral-600"
                  placeholder="Search"
                />
                <div className="hidden absolute inset-y-0 end-0 flex items-center z-20 pe-1">
                  <button
                    type="button"
                    className="inline-flex shrink-0 justify-center items-center size-6 rounded-full text-gray-500 hover:text-blue-600 focus:outline-hidden focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500"
                    aria-label="Close"
                  >
                    <span className="sr-only">Close</span>
                    <svg
                      className="shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx={12} cy={12} r={10} />
                      <path d="m15 9-6 6" />
                      <path d="m9 9 6 6" />
                    </svg>
                  </button>
                </div>
                <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none z-20 pe-3 text-gray-400">
                  <svg
                    className="shrink-0 size-3 text-gray-400 dark:text-white/60"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                  </svg>
                  <span className="mx-1">
                    <svg
                      className="shrink-0 size-3 text-gray-400 dark:text-white/60"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </svg>
                  </span>
                  <span className="text-xs">/</span>
                </div>
              </div>
              {/* End Search Input */}
            </div>
            <div className="flex-1 flex flex-row justify-end items-center gap-1">
              {/* Collapse */}
              <div className="md:hidden">
                <button
                  type="button"
                  className="hs-collapse-toggle size-9.5 relative inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-white hover:bg-white/10 focus:outline-hidden focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none"
                  id="hs-secondaru-navbar-collapse"
                  aria-expanded="false"
                  aria-controls="hs-secondaru-navbar"
                  aria-label="Toggle navigation"
                  data-hs-collapse="#hs-secondaru-navbar"
                >
                  <svg
                    className="hs-collapse-open:hidden size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1={3} x2={21} y1={6} y2={6} />
                    <line x1={3} x2={21} y1={12} y2={12} />
                    <line x1={3} x2={21} y1={18} y2={18} />
                  </svg>
                  <svg
                    className="hs-collapse-open:block shrink-0 hidden size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                  <span className="sr-only">Toggle navigation</span>
                </button>
              </div>
              {/* End Collapse */}
              <button
                type="button"
                className="md:hidden size-9.5 relative inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-white hover:bg-white/10 focus:outline-hidden focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none"
              >
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx={11} cy={11} r={8} />
                  <path d="m21 21-4.3-4.3" />
                </svg>
                <span className="sr-only">Search</span>
              </button>
        
              {/* Dropdown */}
              <div className="hs-dropdown gap-5 [--placement:bottom-right]  relative inline-flex items-center">
                <button type="button" className="text-xs px-2 py-3  bg-linear-to-r from-red-500  to-blue-500 rounded-xl font-medium ">
                  Sign In
                </button>
                <Link to="/cart" className=" relative ">
                  <i className="fa-solid fa-bag-shopping text-xl"></i>
                  <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 -z-10 bg-black text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-bold">
                    {cartLength}
                  </span>
                </Link>
                <Link to="/favorites" className="relative">
                  <i className="fa-regular text-lg fa-heart"></i>
                  <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 -z-10 bg-black text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-bold">
                    {favoritesLength}
                  </span>
                </Link>
              </div>
              {/* End Dropdown */}
            </div>
          </nav>
        </header>
        {/* ========== END HEADER ========== */}
      </>
    </>
  );
}
