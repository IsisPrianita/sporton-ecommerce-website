import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const categoryList = [
  { name: "Running", img: "/assets/foto/categories/category-running.png" },
  { name: "Tennis", img: "/assets/foto/categories/category-tennis.png" },
  { name: "Basketball", img: "/assets/foto/categories/category-basketball.png" },
  { name: "Football", img: "/assets/foto/categories/category-football.png" },
  { name: "Badminton", img: "/assets/foto/categories/category-badminton.png" },
  { name: "Swimming", img: "/assets/foto/categories/category-swimming.png" },
];

const CategoriesSection = () => {
  return (
    <section className="container mx-auto px-6 md:px-12 lg:px-20 py-16">
      
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="font-bold text-xl sm:text-2xl md:text-3xl">
          Browse By Categories
        </h2>

        <Link
          href="#"
          className="flex items-center gap-2 text-primary font-medium"
        >
          <span>See All Categories</span>
          <FiArrowRight />
        </Link>
      </div>

      {/* GRID */}
      <div className="grid gap-4 sm:gap-6 md:gap-8 lg:gap-10 mt-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        
        {categoryList.map((category, index) => (
          <div
            key={index}
            className="rounded-xl bg-gradient-to-r from-[#F1F1F1] to-[#F7F7F7] aspect-square flex items-center justify-center hover:scale-105 transition"
          >
            <div className="text-center">

              {/* IMAGE */}
              <Image
                src={category.img}
                alt={category.name}
                width={80}
                height={80}
                className="mx-auto mb-3 object-contain"
              />

              {/* TEXT */}
              <p className="text-primary font-medium text-sm sm:text-base md:text-lg">
                {category.name}
              </p>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default CategoriesSection;