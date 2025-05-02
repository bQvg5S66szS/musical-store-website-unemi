
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-music-primary">
                Melody<span className="text-music-accent">Music</span>
              </Link>
            </div>
            <div className="md:hidden">
              <button className="text-gray-700 focus:outline-none">
                <svg
                  className="h-6 w-6 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="md:flex flex-col md:flex-row md:items-center md:mx-6 hidden">
            <Link
              to="/"
              className={`nav-link mt-3 md:mt-0 md:mx-2 ${
                path === "/" ? "active" : ""
              }`}
            >
              Principal
            </Link>
            <Link
              to="/nosotros"
              className={`nav-link mt-3 md:mt-0 md:mx-2 ${
                path === "/nosotros" ? "active" : ""
              }`}
            >
              Nosotros
            </Link>
            <Link
              to="/equipo"
              className={`nav-link mt-3 md:mt-0 md:mx-2 ${
                path === "/equipo" ? "active" : ""
              }`}
            >
              Equipo
            </Link>
            <Link
              to="/clientes"
              className={`nav-link mt-3 md:mt-0 md:mx-2 ${
                path === "/clientes" ? "active" : ""
              }`}
            >
              Clientes
            </Link>
            <Link
              to="/productos"
              className={`nav-link mt-3 md:mt-0 md:mx-2 ${
                path === "/productos" ? "active" : ""
              }`}
            >
              Productos
            </Link>
            <Link
              to="/promociones"
              className={`nav-link mt-3 md:mt-0 md:mx-2 ${
                path === "/promociones" ? "active" : ""
              }`}
            >
              Promociones
            </Link>
            <Link
              to="/sucursales"
              className={`nav-link mt-3 md:mt-0 md:mx-2 ${
                path === "/sucursales" ? "active" : ""
              }`}
            >
              Sucursales
            </Link>
            <Link
              to="/login"
              className="btn-accent mt-3 md:mt-0 md:ml-6"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
