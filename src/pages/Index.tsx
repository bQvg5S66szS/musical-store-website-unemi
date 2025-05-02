
import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { products } from "../data/productData";
import ProductCard from "../components/products/ProductCard";

const Index = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-music-primary to-music-secondary text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
                Descubre tu pasión por la música
              </h1>
              <p className="text-xl mb-6">
                En MelodyMusic encontrarás los mejores instrumentos musicales y accesorios profesionales para tus creaciones.
              </p>
              <div className="flex space-x-4">
                <Link to="/productos" className="btn-accent">
                  Ver Productos
                </Link>
                <Link to="/promociones" className="bg-white text-music-primary hover:bg-gray-100 font-semibold py-2 px-4 rounded transition-colors">
                  Promociones
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=600&fit=crop"
                alt="Instrumentos musicales"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Productos Destacados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/productos" className="btn-primary">
              Ver Todos los Productos
            </Link>
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <img
                src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop"
                alt="Sobre nosotros"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2 md:pl-12">
              <h2 className="section-title">Sobre Nosotros</h2>
              <p className="text-gray-600 mb-6">
                Con más de 20 años de experiencia, somos especialistas en instrumentos musicales y equipo profesional. Nuestra pasión por la música nos impulsa a ofrecer productos de la más alta calidad y un servicio excepcional.
              </p>
              <Link to="/nosotros" className="btn-primary">
                Conoce Más
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-music-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Listo para hacer música?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Visita nuestras sucursales o contáctanos para asesoramiento personalizado sobre cualquier instrumento o equipo musical.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/sucursales" className="btn-accent">
              Nuestras Sucursales
            </Link>
            <Link to="/productos" className="bg-white text-music-primary hover:bg-gray-100 font-semibold py-2 px-4 rounded transition-colors">
              Explorar Productos
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
