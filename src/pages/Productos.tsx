
import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import PageHeader from "../components/ui/PageHeader";
import ProductCard from "../components/products/ProductCard";
import { products } from "../data/productData";

const Productos = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const categories = ["Todos", ...Array.from(new Set(products.map(p => p.category)))];
  
  const filteredProducts = selectedCategory === "Todos" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <Layout>
      <PageHeader
        title="Nuestros Productos"
        subtitle="Explora nuestra amplia gama de instrumentos musicales"
        bgImage="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&h=400&fit=crop"
      />

      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Category Filters */}
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? "bg-music-primary text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No se encontraron productos en esta categoría.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="py-12 bg-music-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Necesitas ayuda para elegir?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Nuestro equipo de expertos está listo para asesorarte en la elección del instrumento perfecto para ti.
          </p>
          <div className="inline-block bg-white text-music-primary hover:bg-gray-100 font-semibold py-2 px-6 rounded-full transition-colors">
            Contáctanos
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Productos;
