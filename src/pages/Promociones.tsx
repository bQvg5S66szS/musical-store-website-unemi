
import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import PageHeader from "../components/ui/PageHeader";
import PromotionCard from "../components/promotions/PromotionCard";
import { promotions as initialPromotionsData, Promotion } from "../data/promotionData";

const Promociones = () => {
  const [promotions, setPromotions] = useState<Promotion[]>([]);
  const [loading, setLoading] = useState(true);

  // Simulate loading data dynamically as required in the specs
  useEffect(() => {
    // This simulates fetching data from an API
    const loadPromotions = () => {
      setTimeout(() => {
        setPromotions(initialPromotionsData);
        setLoading(false);
        console.log("Promotions loaded dynamically:", initialPromotionsData);
      }, 500); // simulate network delay
    };

    loadPromotions();
  }, []);

  return (
    <Layout>
      <PageHeader
        title="Promociones Especiales"
        subtitle="Aprovecha nuestras ofertas y descuentos"
        bgImage="https://images.unsplash.com/photo-1605020420620-20c943cc4669?w=1200&h=400&fit=crop"
      />

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="section-title">Promociones Actuales</h2>
            <p className="text-gray-600">
              No te pierdas estas increíbles oportunidades para adquirir los instrumentos que siempre has deseado.
            </p>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-music-primary"></div>
              <p className="mt-3 text-gray-600">Cargando promociones...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="promotions-container">
              {promotions.map((promotion) => (
                <PromotionCard key={promotion.id} promotion={promotion} />
              ))}
            </div>
          )}

          {!loading && promotions.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No hay promociones activas en este momento.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="py-12 bg-music-accent bg-opacity-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-music-primary mb-4">Suscríbete a nuestro boletín</h3>
              <p className="text-gray-600 mb-6">
                Recibe información sobre nuevas promociones, productos y eventos directamente en tu correo.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="flex-grow px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-music-primary"
                />
                <button className="btn-primary whitespace-nowrap">
                  Suscribirme
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Promociones;
