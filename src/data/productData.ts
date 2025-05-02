
export type Product = {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  price: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Guitarra Eléctrica Stratocaster",
    category: "Guitarras",
    image: "https://images.unsplash.com/photo-1588449668365-d15e397f6787?w=600&h=400&fit=crop",
    description: "Guitarra eléctrica con cuerpo de aliso, mástil de arce y diapasón de palisandro. 3 pastillas single-coil.",
    price: 599.99
  },
  {
    id: 2,
    name: "Piano Digital Yamaha P-125",
    category: "Teclados",
    image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=600&h=400&fit=crop",
    description: "Piano digital de 88 teclas con peso contrapesado, 24 voces y conexión USB-MIDI.",
    price: 699.99
  },
  {
    id: 3,
    name: "Batería Acústica Completa",
    category: "Percusión",
    image: "https://images.unsplash.com/photo-1543443258-92b04ad5ec6b?w=600&h=400&fit=crop",
    description: "Set completo con bombo de 22\", tom de 12\", tom de piso de 16\", caja de 14\" y platillos.",
    price: 899.99
  },
  {
    id: 4,
    name: "Saxofón Alto",
    category: "Viento",
    image: "https://images.unsplash.com/photo-1573871666457-7c7329118cf9?w=600&h=400&fit=crop",
    description: "Saxofón alto en Eb con acabado lacado dorado, estuche rígido y accesorios incluidos.",
    price: 749.99
  },
  {
    id: 5,
    name: "Ukelele Soprano",
    category: "Cuerdas",
    image: "https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?w=600&h=400&fit=crop",
    description: "Ukelele soprano con cuerpo de caoba, diapasón de palisandro y clavijeros de precisión.",
    price: 89.99
  },
  {
    id: 6,
    name: "Bajo Eléctrico Precision",
    category: "Guitarras",
    image: "https://images.unsplash.com/photo-1626619293851-6fdef6683d5e?w=600&h=400&fit=crop",
    description: "Bajo eléctrico de 4 cuerdas con cuerpo de aliso, mástil de arce y diapasón de palisandro.",
    price: 499.99
  },
  {
    id: 7,
    name: "Violín 4/4 Completo",
    category: "Cuerdas",
    image: "https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?w=600&h=400&fit=crop",
    description: "Violín de tamaño completo con arco, resina y estuche incluidos. Ideal para estudiantes.",
    price: 249.99
  },
  {
    id: 8,
    name: "Amplificador para Guitarra 40W",
    category: "Amplificadores",
    image: "https://images.unsplash.com/photo-1546058256-47154de4046c?w=600&h=400&fit=crop",
    description: "Amplificador de 40W con 2 canales, efectos digitales incorporados y entrada auxiliar.",
    price: 199.99
  }
];
