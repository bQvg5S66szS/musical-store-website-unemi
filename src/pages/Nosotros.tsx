
import React from "react";
import Layout from "../components/layout/Layout";
import PageHeader from "../components/ui/PageHeader";

const Nosotros = () => {
  return (
    <Layout>
      <PageHeader
        title="Sobre Nosotros"
        subtitle="Conoce nuestra historia y misión"
        bgImage="https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=1200&h=400&fit=crop"
      />

      {/* History Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <img
                src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=600&fit=crop"
                alt="Historia de MelodyMusic"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2 md:pl-12">
              <h2 className="section-title">Nuestra Trayectoria</h2>
              <p className="text-gray-600 mb-4">
                MelodyMusic nació en 2005 como un pequeño negocio familiar con un objetivo claro: acercar la música de calidad a todos los amantes de este arte. Lo que comenzó como una tienda de instrumentos de cuerda, pronto se expandió para incluir una amplia variedad de instrumentos y accesorios musicales.
              </p>
              <p className="text-gray-600">
                Con el paso de los años, hemos crecido hasta convertirnos en una de las tiendas de instrumentos musicales más reconocidas del país, con múltiples sucursales y un equipo de expertos apasionados por la música que asesoran personalmente a nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-8">
              <h2 className="text-2xl font-bold text-music-primary mb-4">Nuestra Misión</h2>
              <p className="text-gray-600">
                Nuestra misión es proporcionar instrumentos musicales de la más alta calidad, asesoramiento experto y un servicio excepcional a músicos de todos los niveles. Nos esforzamos por fomentar la pasión por la música y apoyar el desarrollo artístico en nuestra comunidad.
              </p>
            </div>
            <div className="card p-8">
              <h2 className="text-2xl font-bold text-music-primary mb-4">Nuestra Visión</h2>
              <p className="text-gray-600">
                Aspiramos a ser reconocidos como el referente nacional en la venta de instrumentos musicales, destacando por nuestra excelencia en el servicio, la calidad de nuestros productos y nuestro compromiso con la educación musical y el desarrollo artístico local.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-10">Nuestros Valores</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-music-secondary bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-music-primary">♫</span>
              </div>
              <h3 className="text-xl font-semibold text-music-primary mb-2">Pasión por la Música</h3>
              <p className="text-gray-600">
                Amamos la música y transmitimos ese amor a través de cada instrumento que vendemos.
              </p>
            </div>
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-music-secondary bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-music-primary">★</span>
              </div>
              <h3 className="text-xl font-semibold text-music-primary mb-2">Calidad</h3>
              <p className="text-gray-600">
                Seleccionamos cuidadosamente cada producto para garantizar la mejor calidad a nuestros clientes.
              </p>
            </div>
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-music-secondary bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-music-primary">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-music-primary mb-2">Innovación</h3>
              <p className="text-gray-600">
                Nos mantenemos al día con las últimas tendencias e innovaciones en el mundo musical.
              </p>
            </div>
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-music-secondary bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-music-primary">♥</span>
              </div>
              <h3 className="text-xl font-semibold text-music-primary mb-2">Comunidad</h3>
              <p className="text-gray-600">
                Apoyamos a artistas locales y fomentamos el desarrollo musical en nuestra comunidad.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Nosotros;
