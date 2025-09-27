import React from "react";

import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

export default function HomePage() {
  const [userProfile, setUserProfile] = useState(null);
  const [matieres, setMatieres] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;
      

      // Récup profil
      const { data: profile } = await supabase.from("eleves").select("*").eq("id", user.id).single();
      
      setUserProfile(profile);

      // Matières liées au niveau
      const { data: matieresData, error: matieresError } = await supabase
        .from("niveaux_matieres")
        .select(`
            id,
            matiere:matieres (
            id,
            nom,
            agent:agents ( id, name, image_url, description )
            )
        `)
        .eq("niveau_id", profile.niveau_id);


      if (matieresError) {
        console.error("Erreur matières:", matieresError);
      } else {
        setMatieres(matieresData || []);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-8 bg-amber-50 min-h-screen">
      <h1 className="text-3xl font-bold text-amber-800 mb-6">
        Bienvenue {userProfile?.prenom} 👋
      </h1>
      <h2 className="text-xl mb-4">Tes matières disponibles :</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {matieres.map((m) => (
            <div
            key={m.id}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
            {/* Affiche l'image de l'agent */}
            <img
                src={m.matiere.agents?.image_url || "/placeholder.png"}
                alt={m.matiere.nom}
                className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
            />

            {/* Nom de la matière */}
            <h3 className="text-lg font-bold text-center">{m.matiere.nom}</h3>

            {/* Description de l’agent */}
            <p className="text-sm text-gray-600 text-center">
                {m.matiere.agents?.description || "Aucune description"}
            </p>

            {/* Bouton de discussion */}
            <button
                className="mt-4 w-full bg-amber-600 text-white py-2 rounded hover:bg-amber-700"
                onClick={() =>
                alert(`Chat avec ${m.matiere.agents?.name || "l'agent"}`)
                }
            >
                Discuter avec {m.matiere.agents?.name || "l'agent"}
            </button>
            </div>
        ))}
        </div>

    </div>
  );
}
