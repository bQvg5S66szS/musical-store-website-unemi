
import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import PageHeader from "../components/ui/PageHeader";
import TeamCard from "../components/team/TeamCard";
import { teamMembers as initialTeamData, TeamMember } from "../data/teamData";

const Equipo = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  // Simulate loading data dynamically as required in the specs
  useEffect(() => {
    // This simulates fetching data from an API
    const loadTeamMembers = () => {
      setTimeout(() => {
        setTeamMembers(initialTeamData);
        setLoading(false);
        console.log("Team members loaded dynamically:", initialTeamData);
      }, 500); // simulate network delay
    };

    loadTeamMembers();
  }, []);

  return (
    <Layout>
      <PageHeader
        title="Nuestro Equipo"
        subtitle="Profesionales apasionados por la música"
        bgImage="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&h=400&fit=crop"
      />

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="section-title">Conoce a Nuestros Especialistas</h2>
            <p className="text-gray-600">
              Nuestro equipo está formado por músicos profesionales y expertos en instrumentos que te brindarán la mejor asesoría para tu compra.
            </p>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-music-primary"></div>
              <p className="mt-3 text-gray-600">Cargando equipo...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" id="team-container">
              {teamMembers.map((member) => (
                <TeamCard key={member.id} member={member} />
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Equipo;
