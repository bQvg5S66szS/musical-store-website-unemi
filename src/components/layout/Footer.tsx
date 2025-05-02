
import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-music-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/4 mb-8">
            <h3 className="text-xl font-bold mb-4">MelodyMusic</h3>
            <p className="text-gray-300 mb-4">
              Tu tienda de confianza para instrumentos musicales de calidad y accesorios profesionales.
            </p>
          </div>

          <div className="w-full md:w-1/4 mb-8">
            <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">Principal</Link>
              </li>
              <li>
                <Link to="/nosotros" className="text-gray-300 hover:text-white">Nosotros</Link>
              </li>
              <li>
                <Link to="/productos" className="text-gray-300 hover:text-white">Productos</Link>
              </li>
              <li>
                <Link to="/promociones" className="text-gray-300 hover:text-white">Promociones</Link>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/4 mb-8">
            <h3 className="text-xl font-bold mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/equipo" className="text-gray-300 hover:text-white">Nuestro Equipo</Link>
              </li>
              <li>
                <Link to="/clientes" className="text-gray-300 hover:text-white">Clientes</Link>
              </li>
              <li>
                <Link to="/sucursales" className="text-gray-300 hover:text-white">Sucursales</Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-300 hover:text-white">Login</Link>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/4 mb-8">
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Av. Principal 123</li>
              <li>Ciudad Comercial</li>
              <li>Teléfono: (123) 456-7890</li>
              <li>Email: info@melodymusic.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; 2025 MelodyMusic. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
