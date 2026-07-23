"use client";
import Categories from "@/components/Categories";
import Image from "next/image";
import { Search, ShoppingBag, Heart} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

<Heart
  size={22}
  className="cursor-pointer hover:text-red-500 transition-all duration-300"
/>

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">

      {/* ================= NAVBAR ================= */}
<nav className="sticky top-0 z-50 flex items-center justify-between px-10 py-5 border-b bg-white">

  {/* Logo */}
  <Image
    src="/Logo_classe_boutique.png"
    alt="Logo Classe Boutique"
    width={220}
    height={90}
    priority
  />


  {/* Menu */}
  <div className="hidden md:flex items-center gap-10 uppercase tracking-[0.2em] text-sm font-medium">

    <a 
      href="#"
      className="relative hover:text-gray-500 transition group"
    >
      Accueil
      <span className="absolute left-0 -bottom-2 w-0 h-[1px] bg-black transition-all group-hover:w-full"></span>
    </a>


    <a 
      href="/boutique"
      className="relative hover:text-gray-500 transition group"
    >
      Boutique
      <span className="absolute left-0 -bottom-2 w-0 h-[1px] bg-black transition-all group-hover:w-full"></span>
    </a>


    <a 
      href="#"
      className="relative hover:text-gray-500 transition group"
    >
      Collections
      <span className="absolute left-0 -bottom-2 w-0 h-[1px] bg-black transition-all group-hover:w-full"></span>
    </a>


    <a 
      href="#"
      className="relative hover:text-gray-500 transition group"
    >
      À propos
      <span className="absolute left-0 -bottom-2 w-0 h-[1px] bg-black transition-all group-hover:w-full"></span>
    </a>


    <a 
      href="#"
      className="relative hover:text-gray-500 transition group"
    >
      Contact
      <span className="absolute left-0 -bottom-2 w-0 h-[1px] bg-black transition-all group-hover:w-full"></span>
    </a>


  </div>


  {/* Icônes */}
  <div className="flex items-center gap-5">

    <Search
      size={22}
      className="cursor-pointer transition hover:scale-110 hover:text-gray-500"
    />


    <Heart
      size={22}
      className="cursor-pointer transition hover:scale-110 hover:text-red-500"
    />


    <ShoppingBag
      size={22}
      className="cursor-pointer transition hover:scale-110 hover:text-gray-500"
    />

  </div>


</nav>

      {/* ================= HERO SLIDER ================= */}

      <section className="relative">

        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          effect="fade"
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="h-[85vh]"
        >

          {/* Slide 1 */}

          <SwiperSlide>

            <div className="relative w-full h-[120vh]">

              <Image
                src="/hero/hero1.jpeg"
                alt="Hero 1"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/40"></div>

              <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">

                <h1 className="text-6xl font-serif">
                  L'élégance à votre portée
                </h1>

                <p className="mt-6 max-w-xl text-lg">
                  Découvrez notre nouvelle collection premium.
                </p>

                <button className="mt-8 bg-white text-black px-8 py-4 uppercase tracking-widest hover:bg-gray-200 transition">
                  Découvrir
                </button>

              </div>

            </div>

          </SwiperSlide>

          {/* Slide 2 */}

          <SwiperSlide>

            <div className="relative w-full h-[85vh]">

              <Image
                src="/hero/hero2.jpeg"
                alt="Hero 2"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/40"></div>

              <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">

                <h1 className="text-6xl font-serif">
                  Nouvelle Collection
                </h1>

                <p className="mt-6 text-lg">
                  Des pièces sélectionnées avec soin.
                </p>
                <button className="mt-8 bg-white text-black px-8 py-4 uppercase tracking-widest hover:bg-gray-200 transition">
                  Découvrir
                </button>

              </div>

            </div>

          </SwiperSlide>

          {/* Slide 3 */}

          <SwiperSlide>

            <div className="relative w-full h-[85vh]">

              <Image
                src="/hero/hero3.jpeg"
                alt="Hero 3"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/40"></div>

              <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">

                <h1 className="text-6xl font-serif">
                  Le raffinement au quotidien
                </h1>

                <p className="mt-6 text-lg">
                  Découvrez des pièces uniques pour un style intemporel.
                </p>

                <button className="mt-8 bg-white text-black px-8 py-4 uppercase tracking-widest hover:bg-gray-200 transition">
                  Découvrir
                </button>

              </div>

            </div>

          </SwiperSlide>

          {/* Slide 4 */}

          <SwiperSlide>

            <div className="relative w-full h-[85vh]">

              <Image
                src="/hero/hero4.jpeg"
                alt="Hero 4"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/40"></div>

              <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">

                <h1 className="text-6xl font-serif">
                  Des accessoires d'exception
                </h1>
                <button className="mt-8 bg-white text-black px-8 py-4 uppercase tracking-widest hover:bg-gray-200 transition">
                  Découvrir
                </button>
              </div>

            </div>

          </SwiperSlide>

          {/* Slide 5 */}

          <SwiperSlide>

            <div className="relative w-full h-[85vh]">

              <Image
                src="/hero/hero5.jpeg"
                alt="Hero 5"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/40"></div>

              <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">

                <h1 className="text-6xl font-serif">
                  Classe Boutique
                </h1>

                <p className="mt-6 text-lg">
                  L'élégance commence ici.
                </p>
                <button className="mt-8 bg-white text-black px-8 py-4 uppercase tracking-widest hover:bg-gray-200 transition">
                  Découvrir
                </button>
              </div>

            </div>

          </SwiperSlide>

        </Swiper>

      </section>
      <Categories />
      {/* ================= COLLECTIONS ================= */}

      <section className="px-10 py-20">

        <h2 className="text-4xl font-serif text-center mb-12">
          Nos collections
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

          <div className="border p-10 text-center hover:shadow-xl transition duration-300 cursor-pointer">

            <h3 className="text-2xl font-serif">
              Homme
            </h3>

          </div>

          <div className="border p-10 text-center hover:shadow-xl transition duration-300 cursor-pointer">

            <h3 className="text-2xl font-serif">
              Accessoires
            </h3>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="border-t py-8 text-center text-gray-500">

        © 2026 Classe Boutique — Tous droits réservés.

      </footer>

    </main>
  );
}