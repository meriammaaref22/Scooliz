import React from "react";
// Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// Swiper modules (v10+)
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import {Link} from 'react-router-dom';


// Exemple d'images (tu pourras remplacer par tes propres images locales ou URLs)



export default function LandingPage() {
  const subjects = [
  {
    name: "Français",
    agent: "Victor Hugo",
    image: "/images/Agents/Victor_Hugo.png",
    description: "Les mots sont des fenêtres. Ensemble, on apprivoise la langue de Molière."
  },
  {
    name: "Anglais",
    agent: "William Shakespeare",
    image: "/images/Agents/William_Shakespeare.png",
    description: "“To be or not to be… bilingue ? Avec moi, la question ne se pose plus !”"
  },
  {
    name: "SVT",
    agent: "Charles Darwin",
    image: "/images/Agents/Charles_Darwin.png",
    description: "Du vivant aux écosystèmes, je vous montre l’évolution pas à pas."
  },
  {
    name: "Physique-Chimie",
    agent: "Marie Curie",
    image: "/images/Agents/Marie_Curie.png",
    description: "“Un peu de rayonnement, beaucoup de sciences… attention, ça va briller !”"
  },
  {
    name: "Mathématiques",
    agent: "Thalès",
    image: "/images/Agents/Thales.png",
    description: "Des théorèmes aux équations, tout devient clair avec un peu de logique."
  },
  {
    name: "Philosophie",
    agent: "Socrate",
    image: "/images/Agents/Socrate.png",
    description: "Je ne donne pas de réponses… mais je vous guide vers les bonnes questions."
  },
  {
    name: "Humanités",
    agent: "Léonard de Vinci",
    image: "/images/Agents/Leonard.png",
    description: "Entre art et science, découvrons ensemble la beauté du savoir."
  },
  {
    name: "SES (Sciences Économiques et Sociales)",
    agent: "Adam Smith",
    image: "/images/Agents/Adam_Smith.png",
    description: "L’économie n’est pas un mystère, c’est une logique à comprendre pas à pas."
  },
  {
    name: "Enseignement moral et civique",
    agent: "Montesquieu",
    image: "/images/Agents/Montesquieu.png",
    description: "“Je pense, donc je doute… mais je vous aide à y voir clair !”"
  },
  {
    name: "Enseignement scientifique",
    agent: "Galilée",
    image: "/images/Agents/Galilée.png",
    description: "Et pourtant, elle tourne ! La science est une aventure passionnante."
  },
  {
    name: "Histoire",
    agent: "Napoléon Bonaparte",
    image: "/images/Agents/Napoleon.png",
    description: "L’Histoire, c’est la clé pour comprendre notre présent et guider l’avenir."
  },
  {
    name: "Géographie",
    agent: "Marco Polo",
    image: "/images/Agents/Marco_Polo.png",
    description: "Voyageons ensemble pour explorer les terres et les cultures du monde."
  },
  {
    name: "Numérique et sciences informatiques",
    agent: "Ada Lovelace",
    image: "/images/Agents/Ada_Lovelace.png",
    description: "Du code aux algorithmes, je rends l’informatique simple et créatif."
  },
  {
    name: "Géopolitique et sciences politiques",
    agent: "Niccolò Machiavel",
    image: "/images/Agents/Marco_Polo.png",
    description: "La politique, c’est l’art de comprendre les rapports de force du monde."
  },
];
  return (
    <div className="font-sans text-amber-900 ">
      {/* Header */}
      <header className="bg-gradient-to-r from-amber-50 to-orange-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-6 px-6">
          <img
              src="/images/Logo-complet.png"
              alt="logo"
              className=" w-30 h-20"
            />
          <nav className="space-x-7 hidden md:flex">
            <Link to="/" className="hover:text-orange-600 font-bold">Accueil</Link>
            <Link to="/cours" className="hover:text-orange-600 font-bold">Cours</Link>
            <Link to="/services" className="hover:text-orange-600 font-bold">Services</Link>
            <Link to="/contact" className="hover:text-orange-600 font-bold">Contact</Link>
          </nav>
          <div className="space-x-4">
            <Link
          to="/signup"
          className="bg-white text-amber-600 px-6 py-3 rounded-xl shadow hover:bg-gray-100"
        >
          Inscription
        </Link>

        <Link
          to="/login"
          className="bg-amber-800 px-6 py-3 rounded-xl shadow hover:bg-amber-900"
        >
          Connexion
        </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
        <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-20 rounded-b-[40%] shadow-lg">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Du CP à la Terminale,
                <span className="text-orange-600">un compagnon toujours à vos côtés</span>
            </h2>
            <p className="text-lg text-amber-700 mb-8">
                Fini le stress des révisions et des devoirs. Scoolizi rend l’apprentissage interactif, clair et adapté à chaque style cognitif.
                Du primaire au lycée, un soutien continu, pour les parents et les enfants.
            </p>
            <button className="px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-full text-lg hover:from-amber-700 hover:to-orange-700">
                Commencer maintenant
            </button>
            </div>
            <div className="md:w-1/2 flex justify-center">
            <img
                src="/images/Fam-Banner.png"
                alt="Hero"
                className="rounded-2xl"
            />
            </div>
            </div>
        </section>


      {/* Features */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold ">Nos services </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="p-6 rounded-2xl shadow hover:shadow-lg transition text-center">
                <img
                    src="/images/bourse-detudes.png"
                    alt="Hero"
                    className="rounded-2xl w-20 h-20 mx-auto mb-4"
                />
                <h3 className="text-xl font-bold mb-4">Aligné sur les programmes</h3>
                
            </div>
            <div className="p-6  rounded-2xl shadow hover:shadow-lg transition text-center">
              <img
                    src="/images/parent.png"
                    alt="Hero"
                    className="rounded-2xl w-20 h-20 mx-auto mb-4"
                />
              <h3 className="text-xl font-bold mb-4">Respect de vos données. </h3>
              
            </div>
            <div className="p-6  rounded-2xl shadow hover:shadow-lg transition text-center">
              <img
                    src="/images/Security.png"
                    alt="Hero"
                    className="rounded-2xl w-20 h-20 mx-auto mb-4"
                />
              <h3 className="text-xl font-bold mb-4">Aide aux devoirs / Anti Triche.</h3>
              
            </div>
            <div className="p-6  rounded-2xl shadow hover:shadow-lg transition text-center">
              <img
                    src="/images/infinity.png"
                    alt="Hero"
                    className="rounded-2xl w-20 h-20 mx-auto mb-4"
                />
              <h3 className="text-xl font-bold mb-4">Disponible en illimité.
</h3>
              
            </div>
          </div>
        </div>
      </section>

      {/* Carrousel matières */}
      <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-20 rounded-[10%]">
        <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
            Découvrez nos matières et leurs <span className="text-orange-600">agents IA</span>
            </h2>

            <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            }}
            pagination={{ clickable: true }}
            navigation={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
            modules={[Pagination, Navigation, Autoplay]}
            className="pb-10"
            >
            {subjects.map((subject, i) => (
                <SwiperSlide key={i}>
                <div className="bg-white border border-amber-200 rounded-2xl p-6 shadow hover:shadow-xl transition hover:-translate-y-2">
                  <img
                    src={subject.image}
                    alt={subject.name}
                    className="w-40 h-40 object-cover rounded-xl mb-4 mx-auto"
                  />
                  <h3 className="text-xl font-bold text-amber-900 mb-2 text-center">
                    {subject.name}
                  </h3>
                  <p className="text-amber-700 text-center font-medium mb-2">
                    {subject.agent}
                  </p>
                  <p className="text-black-600 italic text-center text-sm">
                    {subject.description}
                  </p>
                </div>
                </SwiperSlide>

            ))}
            </Swiper>
        </div>
        </section>
      
            {/* Présentation des fonctionnalités */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          
          {/* Bloc 1 */}
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Texte */}
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4 text-amber-900">
                Un accompagnement scolaire, sans se ruiner
              </h3>
              <p className="text-amber-700 text-lg leading-relaxed">
                Parce que l’éducation ne devrait pas être un luxe, Scoolizi rend le soutien scolaire 
                abordable et disponible pour tous. Investir dans la réussite scolaire n’a jamais été 
                aussi simple et économique.
              </p>
            </div>
            {/* Image */}
            <div className="md:w-1/2 flex justify-center">
              <img
                src="/images/A-Scolaire.png"
                alt="Accompagnement scolaire"
                className="rounded-2xl shadow-lg w-80"
              />
            </div>
          </div>

          {/* Bloc 2 (texte à droite) */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-10">
            {/* Texte */}
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4 text-amber-900">
                Un suivi de l'enfant pour les parents
              </h3>
              <p className="text-amber-700 text-lg leading-relaxed">
                Scoolizi, c’est aussi un coach pour les parents : vous savez exactement comment accompagner 
                sans surveiller en permanence. Vous gagnez du temps et gardez la tranquillité d’esprit, 
                pendant que votre enfant progresse.
              </p>
            </div>
            {/* Image */}
            <div className="md:w-1/2 flex justify-center">
              <img
                src="/images/A-Parentale.png"
                alt="Suivi parents"
                className="rounded-2xl shadow-lg w-80"
              />
            </div>
          </div>

          {/* Bloc 3 */}
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Texte */}
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4 text-amber-900">
                Des explications claires, pas à pas
              </h3>
              <p className="text-amber-700 text-lg leading-relaxed">
                Pas de “solution magique” : le tuteur virtuel guide, questionne et explique, pour donner 
                le goût de réfléchir. Un apprentissage progressif et bienveillant : on avance au rythme 
                de votre enfant, sans pression.
              </p>
            </div>
            {/* Image */}
            <div className="md:w-1/2 flex justify-center">
              <img
                src="/images/Explication.png"
                alt="Explications claires"
                className="rounded-2xl shadow-lg w-80"
              />
            </div>
          </div>

          {/* Bloc 4 (texte à droite) */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-10">
            {/* Texte */}
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4 text-amber-900">
                Une expérience personnalisée
              </h3>
              <p className="text-amber-700 text-lg leading-relaxed">
                Chaque élève a son parcours unique : Scoolizi construit un suivi personnalisé grâce aux 
                infos que vous partagez. Vos propres cours et devoirs servent de base pour orienter le tuteur.
              </p>
            </div>
            {/* Image */}
            <div className="md:w-1/2 flex justify-center">
              <img
                src="/images/Exp-Perso.png"
                alt="Expérience personnalisée"
                className="rounded-2xl shadow-lg w-80"
              />
            </div>
          </div>

        </div>
      </section>
      
            {/* Tableau comparatif */}
      <section className="bg-amber-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">
            Pourquoi choisir Scoolizi ?
          </h2>

          <div className="overflow-x-auto rounded-2xl shadow-lg">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-amber-900 text-white text-left">
                  <th className="p-4 text-lg">Critères</th>
                  <th className="p-4 text-lg">ChatGPT basique</th>
                  <th className="p-4 text-lg">Prof particulier</th>
                  <th className="p-4 text-lg">Scoolizi</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {/* Disponibilité */}
                <tr className="border-t">
                  <td className="p-4 font-semibold text-amber-900">Disponibilité</td>
                  <td className="p-4">✅ 24/7 <br /><span className="text-sm text-gray-500">(mais pas spécialisé)</span></td>
                  <td className="p-4">❌ Limité aux horaires</td>
                  <td className="p-4">✅ 24/7 <br /><span className="text-sm text-gray-500">(spécialisé éducation)</span></td>
                </tr>

                {/* Prix */}
                <tr className="border-t bg-amber-50">
                  <td className="p-4 font-semibold text-amber-900">Prix</td>
                  <td className="p-4">✅ Gratuit ou faible coût</td>
                  <td className="p-4">❌ 20–40€ / heure</td>
                  <td className="p-4">✅ Abordable & illimité <br /><span className="text-sm text-gray-500">(un seul abonnement)</span></td>
                </tr>

                {/* Personnalisation */}
                <tr className="border-t">
                  <td className="p-4 font-semibold text-amber-900">Personnalisation</td>
                  <td className="p-4">❌ Réponses génériques</td>
                  <td className="p-4">✅ Adapté mais dépend du prof</td>
                  <td className="p-4">✅ Hyper-personnalisé <br /><span className="text-sm text-gray-500">(emploi du temps, bulletins...)</span></td>
                </tr>

                {/* Méthode d’apprentissage */}
                <tr className="border-t bg-amber-50">
                  <td className="p-4 font-semibold text-amber-900">Méthode d’apprentissage</td>
                  <td className="p-4">❌ Donne la réponse brute <br /><span className="text-sm text-gray-500">(favorise la triche)</span></td>
                  <td className="p-4">➖ Explications humaines <br /><span className="text-sm text-gray-500">(qualité variable)</span></td>
                  <td className="p-4">✅ Pas-à-pas clair <br /><span className="text-sm text-gray-500">(anti-triche, guidé)</span></td>
                </tr>

                {/* Suivi des progrès */}
                <tr className="border-t">
                  <td className="p-4 font-semibold text-amber-900">Suivi des progrès</td>
                  <td className="p-4">❌ Aucun suivi</td>
                  <td className="p-4">➖ Parfois oral, rarement structuré</td>
                  <td className="p-4">✅ Tableau de bord clair <br /><span className="text-sm text-gray-500">(parents & élèves)</span></td>
                </tr>

                {/* Ressources complémentaires */}
                <tr className="border-t bg-amber-50">
                  <td className="p-4 font-semibold text-amber-900">Ressources complémentaires</td>
                  <td className="p-4">❌ Pas de fiches scolaires</td>
                  <td className="p-4">➖ Dépend du prof, limité</td>
                  <td className="p-4">✅ Fiches, quiz, flashcards <br /><span className="text-sm text-gray-500">(alignés au programme)</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      

            {/* Section Offres */}
      <section className="bg-white py-20" id="offres">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">
            Présentation de l’offre Scoolizi
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Offre Gratuite */}
            <div className="bg-amber-50 border border-amber-200 rounded-2xl shadow-md p-8 flex flex-col">
              <h3 className="text-2xl font-bold text-amber-900 mb-4">
                🎓 Offre Gratuite – Découverte
              </h3>
              <p className="text-amber-700 font-semibold text-xl mb-6">0 € / mois</p>
              <p className="text-gray-600 mb-6">👉 Idéal pour tester l’application.</p>

              <ul className="space-y-3 text-gray-700 flex-grow">
                <li>✅ 3 messages par jour avec un Scoolie (tuteur virtuel)</li>
                <li>✅ Explications pas-à-pas et adaptées au niveau de l’enfant</li>
                <li>✅ Accès à des ressources de base (fiches & mini quiz)</li>
                <li>❌ Pas de suivi parental détaillé</li>
                <li>❌ Pas d’historique complet des conversations</li>
              </ul>

              <p className="mt-6 text-sm text-gray-500 italic">
                🔎 Une bonne façon de découvrir Scoolizi et se familiariser avec l’accompagnement intelligent.
              </p>
            </div>

            {/* Offre Payante */}
            <div className="bg-amber-900 text-white rounded-2xl shadow-md p-8 flex flex-col">
              <h3 className="text-2xl font-bold mb-4">
                👨‍👩‍👧 Offre Accompagnement – Parent + Enfant
              </h3>
              <p className="text-amber-200 font-semibold text-xl mb-6">19,99 € / mois</p>
              <p className="text-amber-100 mb-6">👉 L’abonnement pensé pour progresser sur la durée.</p>

              <ul className="space-y-3 flex-grow">
                <li>✅ Messages illimités avec les Scoolies</li>
                <li>✅ 1 parent + 1 enfant inclus</li>
                <li>✅ Possibilité d’ajouter d’autres enfants (forfait famille avantageux)</li>
                <li>✅ Suivi personnalisé : bulletins, emploi du temps, progression réelle</li>
                <li>✅ Tableau de bord clair pour les parents</li>
                <li>✅ Accès complet aux ressources : fiches, quiz, flashcards</li>
                <li>✅ Hyper-personnalisation selon le style d’apprentissage</li>
              </ul>

              <p className="mt-6 text-sm text-amber-200 italic">
                ✨ Toute la puissance de Scoolizi pour aider votre enfant à progresser sans pression 
                et offrir une vraie tranquillité d’esprit aux parents.
              </p>
            </div>
          </div>
        </div>
      </section>



            {/* FAQ Section */}
      <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-20" id="faq">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">
            FAQ Parents
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "Est-ce que Scoolizi fait les devoirs à la place de mon enfant ?",
                a: "Non. L’app guide pas-à-pas pour que l’enfant comprenne, sans donner les réponses toutes faites.",
              },
              {
                q: "À partir de quel âge mon enfant peut-il utiliser Scoolizi ?",
                a: "Dès le primaire, avec un compte lié au parent.",
              },
              {
                q: "Est-ce que c’est adapté à tous les niveaux scolaires ?",
                a: "Oui, du CP à la Terminale, avec un suivi qui évolue selon la classe et les besoins.",
              },
              {
                q: "Comment Scoolizi s’adapte à mon enfant ?",
                a: "L’IA analyse son profil (niveau, bulletins, emploi du temps, style d’apprentissage) pour personnaliser l’accompagnement.",
              },
              {
                q: "Puis-je suivre les progrès de mon enfant ?",
                a: "Oui, vous recevez un tableau de bord clair avec ses points forts, ses difficultés et des conseils concrets.",
              },
              {
                q: "Est-ce que mon enfant risque de tricher avec Scoolizi ?",
                a: "Non. Les Scoolies sont conçus pour expliquer, poser des questions et guider, pas pour donner la réponse directement.",
              },
              {
                q: "Combien coûte Scoolizi ?",
                a: "Il existe une version gratuite (3 messages par jour). L’offre complète coûte 19,99€/mois pour un parent et un enfant.",
              },
              {
                q: "Puis-je ajouter plusieurs enfants sur le même compte ?",
                a: "Oui, l’offre Accompagnement est familiale : vous pouvez ajouter d’autres enfants à votre abonnement.",
              },
              {
                q: "Les données de mon enfant sont-elles protégées ?",
                a: "Oui, Scoolizi est conforme au RGPD : données hébergées en Europe, cryptées, jamais revendues.",
              },
              {
                q: "Scoolizi remplace-t-il le professeur de l’école ?",
                a: "Non. C’est un complément : un tuteur virtuel qui aide à réviser et faire les devoirs plus sereinement.",
              },
              {
                q: "Est-ce que l’IA peut se tromper ?",
                a: "Comme tout outil, cela peut arriver. Mais chaque réponse est orientée pédagogie, avec vérification et explication étape par étape.",
              },
              {
                q: "Que se passe-t-il si je veux arrêter l’abonnement ?",
                a: "Vous pouvez résilier à tout moment, sans engagement.",
              },
            ].map((item, idx) => (
              <details
                key={idx}
                className="group bg-white border border-amber-200 rounded-xl shadow p-4"
              >
                <summary className="flex justify-between items-center cursor-pointer font-semibold text-amber-900">
                  {item.q}
                  <span className="transition-transform group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <p className="mt-2 text-gray-700">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>


            {/* Footer */}
        <footer className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-10 mt-10">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          
          {/* Texte */}
          <p>&copy; 2025 Scoolizi. Tous droits réservés.</p>
          
          {/* Liens légaux */}
          <div className="space-x-6 mt-4 md:mt-0">
            <Link to="/mentions-legales" className="hover:underline">Mentions légales</Link>
            <Link to="/confidentialite" className="hover:underline">Politique de confidentialité</Link>

          </div>

          {/* Réseaux sociaux */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition"
            >
              <i className="fab fa-facebook-f text-xl"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition"
            >
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition"
            >
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition"
            >
              <i className="fab fa-linkedin-in text-xl"></i>
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
