import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Costume Prestige",
    price: "149 000 FCFA",
    image: "/products/costume-noir.jpeg",
  },
  {
    id: 2,
    name: "Chemise Premium",
    price: "35 000 FCFA",
    image: "/products/chemise-blanche.jpeg",
  },
  {
    id: 3,
    name: "Montre Élégance",
    price: "89 000 FCFA",
    image: "/products/montre-luxe.jpeg",
  },
  {
    id: 4,
    name: "Veste Beige",
    price: "79 000 FCFA",
    image: "/products/veste-beige.jpeg",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="max-w-7xl mx-auto py-20 px-6">
      <h2 className="text-4xl font-serif text-center mb-12">
        Produits vedettes
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={500}
              className="w-full h-80 object-cover"
            />

            <div className="p-5">
              <h3 className="text-xl font-semibold">{product.name}</h3>

              <p className="mt-2 text-gray-600">{product.price}</p>

              <button className="mt-5 w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">
                Ajouter au panier
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}