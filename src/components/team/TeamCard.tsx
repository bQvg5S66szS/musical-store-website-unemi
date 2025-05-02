
import React from "react";
import type { TeamMember } from "../../data/teamData";

interface TeamCardProps {
  member: TeamMember;
}

const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  return (
    <div className="card p-4">
      <div className="mb-4 overflow-hidden rounded-full w-32 h-32 mx-auto">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-semibold text-music-primary mb-1">{member.name}</h3>
      <p className="text-music-secondary font-medium mb-2">{member.role}</p>
      <p className="text-gray-600">{member.description}</p>
    </div>
  );
};

export default TeamCard;
