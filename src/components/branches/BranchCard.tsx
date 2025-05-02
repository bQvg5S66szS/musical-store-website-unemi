
import React from "react";
import type { Branch } from "../../data/branchData";

interface BranchCardProps {
  branch: Branch;
}

const BranchCard: React.FC<BranchCardProps> = ({ branch }) => {
  return (
    <div className="card overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img
          src={branch.image}
          alt={branch.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-music-primary mb-2">
          {branch.name}
        </h3>
        <p className="text-gray-600 mb-1">
          <span className="font-medium">Dirección:</span> {branch.address}
        </p>
        <p className="text-gray-600 mb-3">
          <span className="font-medium">Teléfono:</span> {branch.phone}
        </p>
        <a
          href={branch.mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-block"
        >
          Ver en Mapa
        </a>
      </div>
    </div>
  );
};

export default BranchCard;
