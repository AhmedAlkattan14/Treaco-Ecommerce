import { brands } from "../../assets/data/data";

export default function BrandsSec() {
  return (
    <>
      <div className="max-w-[85rem]  py-4  mx-auto">
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-xl font-semibold md:text-2xl md:leading-tight text-gray-800 dark:text-neutral-200">
            Trusted by top fashion brands and thousands of shoppers
          </h2>
        </div>

        <div className="grid grid-cols-2 pb-4  sm:grid-cols-4 md:grid-cols-3 gap-3 lg:gap-6">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="p-4 md:p-7 group bg-gray-100 rounded-lg dark:bg-neutral-800 flex items-center justify-center"
            >
              <img
                src={brand.logo}
                alt={`${brand.name} logo`}
                className="w-16 h-auto md:w-20 group-hover:scale-110 transition-all duration-300  lg:w-24"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
