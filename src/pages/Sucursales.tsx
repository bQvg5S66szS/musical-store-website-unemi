
import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import PageHeader from "../components/ui/PageHeader";
import BranchCard from "../components/branches/BranchCard";
import { branches as initialBranchesData, Branch } from "../data/branchData";

const Sucursales = () => {
  const [branches, setBranches] = useState<Branch[]>([]);
  const [loading, setLoading] = useState(true);

  // Simulate loading data dynamically as required in the specs
  useEffect(() => {
    // This simulates fetching data from an API
    const loadBranches = () => {
      setTimeout(() => {
        setBranches(initialBranchesData);
        setLoading(false);
        console.log("Branches loaded dynamically:", initialBranchesData);
      }, 500); // simulate network delay
    };

    loadBranches();
  }, []);

  return (
    <Layout>
      <PageHeader
        title="Nuestras Sucursales"
        subtitle="Encuéntranos en las principales ciudades"
        bgImage="https://images.unsplash.com/photo-1577415124269-fc1140a69e91?w=1200&h=400&fit=crop"
      />

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="section-title">Visítanos</h2>
            <p className="text-gray-600">
              Contamos con sucursales estratégicamente ubicadas para atenderte con la mejor selección de instrumentos musicales.
            </p>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-music-primary"></div>
              <p className="mt-3 text-gray-600">Cargando sucursales...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="branches-container">
              {branches.map((branch) => (
                <BranchCard key={branch.id} branch={branch} />
              ))}
            </div>
          )}

          {!loading && branches.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No hay sucursales registradas en este momento.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-music-primary mb-4">Horarios de Atención</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Días Laborables</h4>
                  <p className="text-gray-600">Lunes a Viernes: 9:00 AM - 7:00 PM</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Fines de Semana</h4>
                  <p className="text-gray-600">Sábados: 10:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Domingos: 10:00 AM - 2:00 PM</p>
                </div>
              </div>
              <hr className="my-6" />
              <h4 className="font-semibold text-lg mb-2">Contacto General</h4>
              <p className="text-gray-600">Teléfono: (123) 456-7890</p>
              <p className="text-gray-600">Email: info@melodymusic.com</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sucursales;
