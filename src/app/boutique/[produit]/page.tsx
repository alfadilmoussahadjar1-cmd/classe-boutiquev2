import Image from "next/image";
import { produits } from "@/data/products";


export default async function Produit({
  params,
}: {
  params: Promise<{ produit: string }>;
}) {


  const { produit } = await params;


  const article = produits.find(
    (item) => item.slug === produit
  );


  if (!article) {

    return (

      <main className="min-h-screen flex items-center justify-center">

        <h1 className="text-4xl font-serif">
          Produit introuvable
        </h1>

      </main>

    );

  }



  return (

    <main className="min-h-screen bg-white text-black px-10 py-20">


      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">


        {/* IMAGE */}

        <div className="relative h-[600px]">

          <Image
            src={article.image}
            alt={article.nom}
            fill
            className="object-cover"
          />

        </div>



        {/* INFORMATIONS */}

        <div className="flex flex-col justify-center">


          <p className="uppercase tracking-widest text-gray-500">
            {article.categorie}
          </p>



          <h1 className="text-5xl font-serif mt-4">
            {article.nom}
          </h1>



          <p className="text-2xl mt-6">
            {article.prix}
          </p>



          <p className="text-gray-600 mt-8 leading-relaxed">
            {article.description}
          </p>



          <button className="mt-10 bg-black text-white py-4 uppercase tracking-widest hover:bg-gray-800 transition">
            Ajouter au panier
          </button>


        </div>


      </div>


    </main>

  );
}