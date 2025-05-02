
import React from "react";
import type { Promotion } from "../../data/promotionData";

interface PromotionCardProps {
  promotion: Promotion;
}

const PromotionCard: React.FC<PromotionCardProps> = ({ promotion }) => {
  return (
    <div className="card overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img
          src={promotion.image}
          alt={promotion.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-music-primary mb-2">
          {promotion.title}
        </h3>
        <p className="text-gray-600 mb-3">{promotion.description}</p>
        <div className="bg-music-secondary bg-opacity-10 px-3 py-2 rounded-md">
          <p className="text-music-secondary text-sm font-medium">
            Válido hasta: {new Date(promotion.validUntil).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PromotionCard;
