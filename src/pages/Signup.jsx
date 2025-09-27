import { useState,useEffect } from "react";
import { supabase } from "../supabaseClient";

export default function Signup() {
  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    email: "",
    password: "",
    age: "",
    niveau_id: "",
    type_apprentissage: "",
  });
  const [niveaux, setNiveaux] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchNiveaux = async () => {
      const { data, error } = await supabase.from("niveaux").select("id, nom");
      if (error) {
        console.error("Erreur fetch niveaux:", error);
      } else {
        setNiveaux(data);
      }
    };
    fetchNiveaux();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Création compte
    const { data, error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
    });

    if (error) {
      setMessage(error.message);
      return;
    }
    if (!data.user) {
        setMessage("Impossible de récupérer l'utilisateur Supabase.");
        return;
    }

    // Insertion profil utilisateur
    const { error: profileError } = await supabase.from("eleves").insert([
      {
        id: data.user.id,
        nom: form.nom,
        prenom: form.prenom,
        age: form.age,
        niveau_id: form.niveau_id,
        type_apprentissage: form.type_apprentissage,
        email: form.email,
      },
    ]);

    if (profileError) {
      setMessage(profileError.message);
    } else {
      setMessage("Inscription réussie ! Vérifiez votre email pour confirmer.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-amber-50">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md w-96 space-y-4">
        <h1 className="text-2xl font-bold text-center text-amber-700">Inscription</h1>

        <input type="text" name="nom" placeholder="Nom" onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="text" name="prenom" placeholder="Prénom" onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="number" name="age" placeholder="Âge" onChange={handleChange} className="w-full p-2 border rounded" required />
        {/* Sélecteur de niveau */}
        <select name="niveau_id" value={form.niveau_id} onChange={handleChange} className="w-full p-2 border rounded" required>
          <option value="">Niveau</option>
          {niveaux.map((niv) => (
            <option key={niv.id} value={niv.id}>
              {niv.nom}
            </option>
          ))}
        </select>

        <select name="type_apprentissage" onChange={handleChange} className="w-full p-2 border rounded">
          <option value="">Type d’apprentissage</option>
          <option value="visuel">Visuel</option>
          <option value="auditif">Auditif</option>
          <option value="textuel">Textuel</option>
        </select>

        <input type="email" name="email" placeholder="Email" onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="password" name="password" placeholder="Mot de passe" onChange={handleChange} className="w-full p-2 border rounded" required />

        <button type="submit" className="w-full bg-amber-600 text-white p-2 rounded hover:bg-amber-700">
          S’inscrire
        </button>

        {message && <p className="text-center text-sm text-red-500">{message}</p>}
      </form>
    </div>
  );
}
