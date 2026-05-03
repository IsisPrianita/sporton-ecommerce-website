import Image from "next/image";
import Link from "next/link";
import { FiPlus } from "react-icons/fi";

const productList = [
  { name: "SportsOn Hyperfast Shoes", category: "Running", price: 329000, imgUrl: "product-1.png" },
  { name: "SportsOn Rockets Tennis", category: "Tennis", price: 999000, imgUrl: "product-2.png" },
  { name: "SportsOn Slowlivin", category: "Running", price: 119000, imgUrl: "product-3.png" },
  { name: "SportsOn HyperSoccer v2", category: "Football", price: 458000, imgUrl: "product-4.png" },
  { name: "SportsOn HyperSoccer v2", category: "Football", price: 458000, imgUrl: "product-4.png" },
  { name: "SportsOn Slowlivin", category: "Running", price: 119000, imgUrl: "product-3.png" },
  { name: "SportsOn Hyperfast Shoes", category: "Running", price: 329000, imgUrl: "product-1.png" },
  { name: "SportsOn Rockets Tennis", category: "Tennis", price: 999000, imgUrl: "product-2.png" },
];

const ProductsSection = () => {
  return (
    <section className="container mx-auto px-6 md:px-12 lg:px-20 py-10 mt-10">
      {/* TITLE */}
      <h2 className="font-bold italic text-4xl text-center mb-11">
        <span className="text-primary">OUR </span>PRODUCTS
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 px-4 md:px-8">
        {productList.map((product, index) => (
          <Link
            href="#"
            key={index}
            className="bg-white rounded-lg p-1.5 hover:shadow-lg transition"
          >
            {/* IMAGE BOX */}
            <div className="bg-primary-light aspect-square relative rounded-md overflow-hidden">
              <Image
                src={`/assets/foto/products/${product.imgUrl}`}
                alt={product.name}
                fill
                className="object-contain p-3"
              />
              {/* PLUS BUTTON */}
              <button
                style={{ position: "absolute", top: "8px", right: "8px", zIndex: 50 }}
                className="w-9 h-9 bg-primary rounded-md flex items-center justify-center hover:bg-primary/80 transition cursor-pointer"
              >
                <FiPlus size={18} className="text-white" />
              </button>
            </div>

            {/* NAME */}
            <h3 className="font-medium text-xs md:text-sm mt-2 leading-tight">
              {product.name}
            </h3>

            {/* CATEGORY + PRICE */}
            <div className="flex justify-between items-center mt-0.5">
              <span className="text-gray-500 text-xs">
                {product.category}
              </span>
              <span className="font-medium text-primary text-xs md:text-sm">
                {Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  maximumSignificantDigits: 3,
                }).format(product.price)}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;