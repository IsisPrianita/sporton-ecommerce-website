import { FiFastForward } from "react-icons/fi";
import Button from "../ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section id="hero-section" className="container mx-auto h-screen flex items-center px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="relative w-full flex items-center justify-between">

        {/* KOLOM KIRI */}
        <div className="relative z-10 w-1/2">
          {/* Basketball background */}
          <Image
            src="/assets/foto/img-basketball.png"
            width={432}
            height={423}
            alt="image sporton"
            className="grayscale absolute -left-16 top-1/2 -translate-y-1/2 opacity-30 w-[220px] -z-10"
          />

          <div className="text-primary italic mb-2 text-sm">Friday Sale, 50%</div>

          <h1 className="font-extrabold text-5xl md:text-6xl lg:text-7xl italic bg-gradient-to-b leading-tight from-black to-[#979797] bg-clip-text text-transparent">
            WEAR YOUR <br /> TOP-QUALITY <br /> SPORTSWEAR
          </h1>

          <p className="w-2/3 mt-6 leading-relaxed text-gray-600 text-sm md:text-base">
            Engineered for endurance and designed for speed. Experience gear
            that moves as fast as you do. Premium fabrics. Unmatched comfort.
            Limitless motion.
          </p>

          <div className="flex gap-5 mt-10">
            <Button>
              Explore More <FiFastForward />
            </Button>
            <Button variant="ghost">
              Watch Video{" "}
              <Image
                src="/assets/foto/icon-play-video.svg"
                alt="icon playvideo"
                width={29}
                height={29}
              />
            </Button>
          </div>
        </div>

        {/* KOLOM KANAN */}
        <div className="relative w-1/2 flex justify-center items-center h-[600px]">
          {/* Ornament */}
          <Image
            src="/assets/foto/img-ornament-hero.svg"
            width={420}
            height={420}
            alt="ornament"
            className="absolute -right-20 top-1/2 -translate-y-1/2 w-[300px] lg:w-[360px] -z-10"
          />

          {/* Gambar hero */}
          <Image
            src="/assets/foto/img-hero.png"
            width={700}
            height={950}
            alt="image sporton hero"
            className="w-[300px] md:w-[350px] lg:w-[400px] object-contain relative z-10"
          />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;