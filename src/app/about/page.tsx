export default function APropos() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-20 px-6 text-center bg-gray-50">
        <h1 className="text-4xl font-bold mb-6">
          À propos de notre boutique
        </h1>
        <p className="max-w-3xl mx-auto text-gray-600 text-lg">
          Bienvenue dans notre boutique. Nous proposons une sélection de
          produits pensés pour répondre aux besoins de nos clients avec
          qualité, simplicité et élégance.
        </p>
      </section>

      {/* Notre mission */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Notre mission
        </h2>

        <p className="text-gray-600 text-center max-w-3xl mx-auto">
          Notre objectif est de proposer des produits fiables et modernes
          tout en offrant une expérience d&apos;achat agréable. Nous sélectionnons
          chaque article avec soin afin de garantir la satisfaction de nos
          clients.
        </p>
      </section>

      {/* Nos valeurs */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">
          Nos valeurs
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-3">
              ⭐ Qualité
            </h3>
            <p className="text-gray-600">
              Nous choisissons des produits répondant à nos exigences de
              qualité et de fiabilité.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-3">
              🚀 Innovation
            </h3>
            <p className="text-gray-600">
              Nous suivons les tendances afin de proposer des produits
              modernes et adaptés aux besoins actuels.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-3">
              🤝 Confiance
            </h3>
            <p className="text-gray-600">
              La satisfaction de nos clients est au centre de notre démarche.
            </p>
          </div>

        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Pourquoi nous choisir ?
        </h2>

        <ul className="space-y-4 text-gray-600 max-w-xl mx-auto">
          <li>✅ Produits sélectionnés avec soin</li>
          <li>✅ Une expérience d&apos;achat simple et rapide</li>
          <li>✅ Un service client à l&apos;écoute</li>
          <li>✅ Une priorité donnée à la satisfaction client</li>
        </ul>
      </section>
    </main>
  );
}