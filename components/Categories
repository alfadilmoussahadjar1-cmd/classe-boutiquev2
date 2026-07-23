export default function Categories() {
  const categories = [
    {
      title: "Costumes",
      image: "/costume-noir.jpeg",
    },
    {
      title: "Chemises",
      image: "/chemise-blanche.jpeg",
    },
    {
      title: "Chaussures",
      image: "/hero3.jpeg",
    },
    {
      title: "Accessoires",
      image: "/montre-luxe.jpeg",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Nos Collections
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {categories.map((category) => (

            <div
              key={category.title}
              className="group cursor-pointer overflow-hidden rounded-xl shadow-lg"
            >

              <img
                src={category.image}
                alt={category.title}
                className="h-80 w-full object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="bg-white py-5">

                <h3 className="text-center text-xl font-semibold">
                  {category.title}
                </h3>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}