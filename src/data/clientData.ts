
export type Client = {
  id: number;
  name: string;
  testimonial: string;
  image: string;
}

export const clients: Client[] = [
  {
    id: 1,
    name: "Conservatorio Nacional de Música",
    testimonial: "Melody Music Store ha sido nuestro proveedor de confianza durante más de 5 años. Excelentes productos y servicio profesional.",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=300&h=200&fit=crop"
  },
  {
    id: 2,
    name: "Orquesta Sinfónica Nacional",
    testimonial: "La calidad de los instrumentos y el asesoramiento profesional nos han permitido renovar nuestro equipamiento con total confianza.",
    image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&h=200&fit=crop"
  },
  {
    id: 3,
    name: "Estudio de Grabación SoundLab",
    testimonial: "Siempre encontramos los equipos más innovadores y con el mejor soporte técnico para nuestras producciones.",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=300&h=200&fit=crop"
  },
  {
    id: 4,
    name: "Academia de Música Moderna",
    testimonial: "Nuestros estudiantes se benefician de instrumentos de alta calidad a precios accesibles gracias a Melody Music Store.",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=300&h=200&fit=crop"
  }
];
