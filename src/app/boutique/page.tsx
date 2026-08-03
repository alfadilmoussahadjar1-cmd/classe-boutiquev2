import Image from "next/image";
import Link from "next/link";
import { produits } from "@/data/products";


export default function Boutique() {

  return (

    <main className="min-h-screen bg-white text-black">

      <section className="px-10 py-20">

        <h1 className="text-5xl font-serif text-center">
          Notre Boutique
        </h1>

        <p className="text-center mt-6 text-gray-600">
          Découvrez notre collection de vêtements et accessoires.
        </p>


        <div className="grid md:grid-cols-4 gap-8 mt-16">


          {produits.map((produit) => (

            <div
              key={produit.slug}
              className="border p-5 hover:shadow-xl transition"
            >


              <div className="relative h-80">

                <Image
                  src={produit.image}
                  alt={produit.nom}
                  fill
                  className="object-cover"
                />

              </div>



              <div className="flex justify-between items-center mt-5">

                <h2 className="text-xl font-serif">
                  {produit.nom}
                </h2>


                {produit.nouveau && (
                  <span className="text-xs uppercase tracking-widest border px-2 py-1">
                    Nouveau
                  </span>
                )}

              </div>



              <p className="text-gray-500 text-sm mt-3">
                {produit.description}
              </p>



              <p className="text-lg mt-3 font-medium">
                {produit.prix}
              </p>



              <p className="text-sm text-gray-400 mt-2">
                Catégorie : {produit.categorie}
              </p>



              <Link
                href={`/boutique/${produit.slug}`}
                className="block text-center mt-5 w-full border py-3 uppercase tracking-widest hover:bg-black hover:text-white transition"
              >
                Voir le produit
              </Link>


            </div>

          ))}


        </div>


      </section>


    </main>

  );
}