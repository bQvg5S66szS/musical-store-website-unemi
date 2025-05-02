
export type TeamMember = {
  id: number;
  name: string;
  role: string;
  image: string;
  description: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Juan Pérez",
    role: "Gerente de Tienda",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop",
    description: "Experto en guitarras acústicas con más de 15 años de experiencia en el sector musical."
  },
  {
    id: 2,
    name: "María García",
    role: "Especialista en Teclados",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
    description: "Apasionada por los sintetizadores y profesora de piano con amplio conocimiento en teclados electrónicos."
  },
  {
    id: 3,
    name: "Carlos Rodríguez",
    role: "Técnico de Reparación",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    description: "Especialista en reparación y mantenimiento de instrumentos con certificación en lutería."
  },
  {
    id: 4,
    name: "Ana Martínez",
    role: "Especialista en Percusión",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop",
    description: "Baterista profesional con amplio conocimiento en todo tipo de instrumentos de percusión."
  }
];
