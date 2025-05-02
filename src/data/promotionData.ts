
export type Promotion = {
  id: number;
  title: string;
  image: string;
  description: string;
  validUntil: string;
}

export const promotions: Promotion[] = [
  {
    id: 1,
    title: "Descuento 15% en Guitarras Eléctricas",
    image: "https://images.unsplash.com/photo-1550985616-10810253b84d?w=600&h=400&fit=crop",
    description: "Aprovecha un 15% de descuento en todas las guitarras eléctricas Fender y Gibson durante este mes.",
    validUntil: "2025-06-30"
  },
  {
    id: 2,
    title: "Envío Gratis en Pedidos > $100",
    image: "https://images.unsplash.com/photo-1578898395216-78dae5d29344?w=600&h=400&fit=crop",
    description: "Obtén envío gratuito en todos los pedidos superiores a $100 en cualquiera de nuestros productos.",
    validUntil: "2025-12-31"
  },
  {
    id: 3,
    title: "2x1 en Accesorios",
    image: "https://images.unsplash.com/photo-1605020420620-20c943cc4669?w=600&h=400&fit=crop",
    description: "Lleva 2 accesorios por el precio de 1 en toda nuestra selección de cuerdas, púas, correas y más.",
    validUntil: "2025-07-15"
  }
];
