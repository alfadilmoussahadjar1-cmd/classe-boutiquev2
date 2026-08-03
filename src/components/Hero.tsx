"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";


export default function Hero() {

  return (

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

          <div className="relative w-full h-[85vh]">

            <Image
              src="/hero/hero1.jpeg"
              alt="Hero 1"
              fill
              className="object-cover"
            />


            <div className="absolute inset-0 bg-black/40"></div>


            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">

              <h1 className="text-6xl font-serif">
                L&apos;élégance à votre portée
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
                Des accessoires exception
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
                L&apos;élégance commence ici.
              </p>


              <button className="mt-8 bg-white text-black px-8 py-4 uppercase tracking-widest hover:bg-gray-200 transition">
                Découvrir
              </button>


            </div>


          </div>

        </SwiperSlide>


      </Swiper>


    </section>

  );

}