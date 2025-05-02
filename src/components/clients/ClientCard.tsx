
import React from "react";
import type { Client } from "../../data/clientData";

interface ClientCardProps {
  client: Client;
}

const ClientCard: React.FC<ClientCardProps> = ({ client }) => {
  return (
    <div className="card p-6">
      <div className="flex flex-col md:flex-row items-center mb-4">
        <div className="w-24 h-24 rounded-full overflow-hidden mb-4 md:mb-0 md:mr-4">
          <img
            src={client.image}
            alt={client.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-music-primary">{client.name}</h3>
        </div>
      </div>
      <blockquote className="italic text-gray-600 border-l-4 border-music-accent pl-4">
        "{client.testimonial}"
      </blockquote>
    </div>
  );
};

export default ClientCard;
