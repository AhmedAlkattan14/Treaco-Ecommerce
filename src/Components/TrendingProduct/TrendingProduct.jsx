import { product } from "../../assets/data/data";
import ProductCard from "../ProductCard/ProductCard";

export default function  TrendingProduct() {
  return (
    <>
      <div className="grid container mx-auto grid-cols-1 py-8 mt-8 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {product.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}
