
import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import PageHeader from "../components/ui/PageHeader";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Check credentials as specified in the requirements
    if (username === "unemi" && password === "web2025") {
      // Show success alert
      alert("Inicio de sesión exitoso");
      toast({
        title: "Login exitoso",
        description: "Has iniciado sesión correctamente",
      });
      console.log("Login successful");
    } else {
      // Show error alert
      alert("Credenciales incorrectas");
      toast({
        title: "Error de inicio de sesión",
        description: "Las credenciales ingresadas son incorrectas",
        variant: "destructive",
      });
      console.log("Login failed");
    }
  };

  return (
    <Layout>
      <PageHeader
        title="Iniciar Sesión"
        subtitle="Accede a tu cuenta"
      />

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-music-primary mb-6 text-center">
              Acceso de Usuarios
            </h2>
            
            <form id="login-form" onSubmit={handleLogin}>
              <div className="mb-6">
                <label 
                  htmlFor="username" 
                  className="block text-gray-700 font-medium mb-2"
                >
                  Usuario
                </label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-music-primary"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label 
                  htmlFor="password"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-music-primary"
                  required
                />
              </div>
              
              <div className="mb-4">
                <button 
                  type="submit"
                  id="login-button"
                  className="w-full btn-primary text-center py-3"
                >
                  Iniciar
                </button>
              </div>
              
              <div className="text-center text-sm text-gray-500">
                <p>Usuario de prueba: unemi</p>
                <p>Contraseña de prueba: web2025</p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Login;
