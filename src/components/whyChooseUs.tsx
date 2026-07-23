export default function WhyChooseUs() {

  const features = [
    {
      title: "Qualité Premium",
      description:
        "Des vêtements et accessoires sélectionnés avec soin pour une élégance durable.",
    },
    {
      title: "Livraison Rapide",
      description:
        "Recevez vos commandes rapidement et en toute sécurité.",
    },
    {
      title: "Paiement Sécurisé",
      description:
        "Vos transactions sont protégées avec les meilleures solutions de paiement.",
    },
    {
      title: "Service Client",
      description:
        "Une équipe disponible pour vous accompagner dans vos choix.",
    },
  ];


  return (
    <section className="py-20 px-10 bg-gray-50">

      <h2 className="text-4xl font-serif text-center mb-12">
        Pourquoi choisir Classe Boutique ?
      </h2>


      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">

        {features.map((feature) => (

          <div
            key={feature.title}
            className="bg-white p-8 text-center shadow-sm hover:shadow-xl transition"
          >

            <h3 className="text-xl font-semibold mb-4">
              {feature.title}
            </h3>

            <p className="text-gray-600">
              {feature.description}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}