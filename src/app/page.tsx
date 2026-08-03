"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";


export default function Home() {

  return (

    <main className="min-h-screen bg-white text-black">

      {/* Navigation */}
      <Navbar />


      {/* Slider principal */}
      <Hero />


      {/* Catégories */}
      <Categories />


      {/* Produits vedettes */}
      <FeaturedProducts />


      {/* Pied de page */}
      <Footer />

    </main>

  );

}