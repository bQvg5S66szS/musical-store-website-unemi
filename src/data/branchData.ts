
export type Branch = {
  id: number;
  name: string;
  address: string;
  phone: string;
  mapLink: string;
  image: string;
}

export const branches: Branch[] = [
  {
    id: 1,
    name: "Sucursal Centro",
    address: "Av. 9 de Octubre 123, Centro Histórico",
    phone: "+593 4 123 4567",
    mapLink: "https://maps.google.com/?q=Av+9+de+Octubre+123+Centro+Historico",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&h=400&fit=crop"
  },
  {
    id: 2,
    name: "Sucursal Norte",
    address: "Av. Francisco de Orellana 456, Kennedy Norte",
    phone: "+593 4 234 5678",
    mapLink: "https://maps.google.com/?q=Av+Francisco+de+Orellana+456+Kennedy+Norte",
    image: "https://images.unsplash.com/photo-1519419166318-4f5c601b8e6c?w=600&h=400&fit=crop"
  },
  {
    id: 3,
    name: "Sucursal Sur",
    address: "Av. 25 de Julio 789, Mall del Sur",
    phone: "+593 4 345 6789",
    mapLink: "https://maps.google.com/?q=Av+25+de+Julio+789+Mall+del+Sur",
    image: "https://images.unsplash.com/photo-1620219655479-b61f6a7a0446?w=600&h=400&fit=crop"
  }
];
