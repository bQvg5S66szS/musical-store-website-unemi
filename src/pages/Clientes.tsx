
import React from "react";
import Layout from "../components/layout/Layout";
import PageHeader from "../components/ui/PageHeader";
import { clients } from "../data/clientData";
import ClientCard from "../components/clients/ClientCard";

const Clientes = () => {
  return (
    <Layout>
      <PageHeader
        title="Clientes Satisfechos"
        subtitle="Quienes confían en nosotros"
        bgImage="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=1200&h=400&fit=crop"
      />

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="section-title">Testimonios</h2>
            <p className="text-gray-600">
              Descubre qué opinan nuestros clientes sobre su experiencia con MelodyMusic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {clients.map((client) => (
              <ClientCard key={client.id} client={client} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="section-title">Clientes Institucionales</h2>
            <p className="text-gray-600">
              Algunas de las organizaciones que confían en nosotros para sus necesidades musicales.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-4 rounded-lg shadow flex items-center justify-center h-32">
              <img
                src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=300&h=200&fit=crop"
                alt="Conservatorio Nacional"
                className="max-h-16 max-w-full"
              />
            </div>
            <div className="bg-white p-4 rounded-lg shadow flex items-center justify-center h-32">
              <img
                src="https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&h=200&fit=crop"
                alt="Orquesta Sinfónica"
                className="max-h-16 max-w-full"
              />
            </div>
            <div className="bg-white p-4 rounded-lg shadow flex items-center justify-center h-32">
              <img
                src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=300&h=200&fit=crop"
                alt="Universidad de Música"
                className="max-h-16 max-w-full"
              />
            </div>
            <div className="bg-white p-4 rounded-lg shadow flex items-center justify-center h-32">
              <img
                src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=200&fit=crop"
                alt="Estudio de Grabación"
                className="max-h-16 max-w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Clientes;
