"use client";

import { motion } from 'framer-motion';
import { FaBuilding, FaUserShield, FaClipboardList, FaCookieBite, FaGavel } from 'react-icons/fa';

const MentionsLegalesContent = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-gray-100 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                <FaBuilding className="text-[#FF4242]" />
              </div>
              <h2 className="text-xl font-bold text-[#212121]">Informations légales</h2>
            </div>
            
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>Raison sociale :</strong> Auto-École Fiat 500
              </p>
              <p>
                <strong>Forme juridique :</strong> SARL (Société à Responsabilité Limitée)
              </p>
              <p>
                <strong>Capital social :</strong> 50 000 €
              </p>
              <p>
                <strong>Numéro SIRET :</strong> 123 456 789 00012
              </p>
              <p>
                <strong>Numéro d'agrément préfectoral :</strong> E12 075 0001 0
              </p>
              <p>
                <strong>Adresse du siège social :</strong> 123 Avenue de la Conduite, 75000 Paris, France
              </p>
              <p>
                <strong>Téléphone :</strong> 01 23 45 67 89
              </p>
              <p>
                <strong>Email :</strong> contact@fiat500-autoecole.fr
              </p>
              <p>
                <strong>Directeur de la publication :</strong> Jean Dupont
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-gray-100 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                <FaUserShield className="text-[#FF4242]" />
              </div>
              <h2 className="text-xl font-bold text-[#212121]">Politique de confidentialité</h2>
            </div>
            
            <div className="space-y-4 text-gray-700">
              <h3 className="text-lg font-medium text-[#212121]">Collecte des données personnelles</h3>
              <p>
                Auto-École Fiat 500 s'engage à protéger la vie privée de ses utilisateurs et clients. Nous collectons uniquement les données personnelles nécessaires à la fourniture de nos services d'auto-école, notamment :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Nom, prénom et coordonnées (adresse, téléphone, email)</li>
                <li>Date et lieu de naissance</li>
                <li>Numéro de permis de conduire (le cas échéant)</li>
                <li>Informations de paiement</li>
                <li>Données de progression dans l'apprentissage de la conduite</li>
              </ul>
              
              <h3 className="text-lg font-medium text-[#212121] mt-6">Utilisation des données</h3>
              <p>
                Les données collectées sont utilisées pour :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Gérer les inscriptions et les réservations de cours</li>
                <li>Assurer le suivi pédagogique des élèves</li>
                <li>Communiquer avec les élèves concernant leur formation</li>
                <li>Établir les documents administratifs liés au permis de conduire</li>
                <li>Améliorer nos services et notre offre de formation</li>
              </ul>
              
              <h3 className="text-lg font-medium text-[#212121] mt-6">Conservation des données</h3>
              <p>
                Les données personnelles sont conservées pendant la durée nécessaire à la réalisation des finalités pour lesquelles elles ont été collectées, et au maximum pendant 3 ans après la fin de la relation commerciale, sauf obligation légale de conservation plus longue.
              </p>
              
              <h3 className="text-lg font-medium text-[#212121] mt-6">Droits des utilisateurs</h3>
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants concernant vos données personnelles :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Droit d'accès et de rectification</li>
                <li>Droit à l'effacement (droit à l'oubli)</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit à la portabilité des données</li>
                <li>Droit d'opposition</li>
              </ul>
              <p className="mt-4">
                Pour exercer ces droits, veuillez nous contacter à l'adresse : rgpd@fiat500-autoecole.fr
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-gray-100 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                <FaClipboardList className="text-[#FF4242]" />
              </div>
              <h2 className="text-xl font-bold text-[#212121]">Conditions générales d'utilisation</h2>
            </div>
            
            <div className="space-y-4 text-gray-700">
              <h3 className="text-lg font-medium text-[#212121]">Objet</h3>
              <p>
                Les présentes conditions générales d'utilisation régissent l'utilisation du site web de l'Auto-École Fiat 500 et définissent les modalités d'accès et d'utilisation des services proposés.
              </p>
              
              <h3 className="text-lg font-medium text-[#212121] mt-6">Accès au site</h3>
              <p>
                L'accès au site est gratuit et ouvert à tout utilisateur disposant d'un accès à Internet. Tous les coûts afférents à l'accès au site, que ce soient les frais matériels, logiciels ou d'accès à Internet sont exclusivement à la charge de l'utilisateur.
              </p>
              
              <h3 className="text-lg font-medium text-[#212121] mt-6">Propriété intellectuelle</h3>
              <p>
                L'ensemble des éléments constituant le site (textes, graphismes, logiciels, photographies, images, vidéos, sons, plans, logos, marques, etc.) ainsi que le site lui-même, sont la propriété exclusive de l'Auto-École Fiat 500 ou de ses partenaires. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable.
              </p>
              
              <h3 className="text-lg font-medium text-[#212121] mt-6">Responsabilité</h3>
              <p>
                L'Auto-École Fiat 500 ne pourra être tenue responsable des dommages directs et indirects causés au matériel de l'utilisateur, lors de l'accès au site, et résultant soit de l'utilisation d'un matériel ne répondant pas aux spécifications techniques requises, soit de l'apparition d'un bug ou d'une incompatibilité.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-gray-100 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                <FaCookieBite className="text-[#FF4242]" />
              </div>
              <h2 className="text-xl font-bold text-[#212121]">Politique de cookies</h2>
            </div>
            
            <div className="space-y-4 text-gray-700">
              <p>
                Notre site utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic. Les cookies sont de petits fichiers texte stockés sur votre ordinateur qui nous aident à améliorer notre site et à fournir un meilleur service.
              </p>
              
              <h3 className="text-lg font-medium text-[#212121] mt-6">Types de cookies utilisés</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Cookies essentiels :</strong> Nécessaires au fonctionnement du site</li>
                <li><strong>Cookies de performance :</strong> Collectent des informations anonymes sur la façon dont les visiteurs utilisent notre site</li>
                <li><strong>Cookies de fonctionnalité :</strong> Permettent au site de se souvenir des choix que vous faites</li>
                <li><strong>Cookies de ciblage :</strong> Enregistrent votre visite sur notre site, les pages visitées et les liens suivis</li>
              </ul>
              
              <h3 className="text-lg font-medium text-[#212121] mt-6">Contrôle des cookies</h3>
              <p>
                Vous pouvez contrôler et/ou supprimer les cookies comme vous le souhaitez. Vous pouvez supprimer tous les cookies déjà présents sur votre ordinateur et vous pouvez configurer la plupart des navigateurs pour les empêcher d'être placés. Toutefois, si vous faites cela, vous devrez peut-être ajuster manuellement certaines préférences chaque fois que vous visitez un site, et certains services et fonctionnalités pourraient ne pas fonctionner.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                <FaGavel className="text-[#FF4242]" />
              </div>
              <h2 className="text-xl font-bold text-[#212121]">Litiges et juridiction compétente</h2>
            </div>
            
            <div className="space-y-4 text-gray-700">
              <p>
                Les présentes mentions légales et conditions d'utilisation sont régies par le droit français. En cas de litige relatif à l'interprétation ou à l'exécution des présentes, les tribunaux de Paris seront seuls compétents.
              </p>
              
              <p>
                Conformément aux dispositions des articles L. 611-1 à L. 616-3 du Code de la consommation, tout consommateur a le droit de recourir gratuitement à un médiateur de la consommation en vue de la résolution amiable d'un litige l'opposant à un professionnel.
              </p>
              
              <p className="mt-6 text-sm text-gray-500">
                © 2025 Auto-École Fiat 500 - Tous droits réservés
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MentionsLegalesContent;
