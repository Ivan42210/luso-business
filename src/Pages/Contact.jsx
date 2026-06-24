import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [entreprise, setEntreprise] = useState('');
  const [telephone, setTelephone] = useState('');
  const [message, setMessage] = useState('');
  const [rgpd, setRgpd] = useState(false);

  const handleSubmit = () => {
    console.log('Nom:', nom);
    console.log('Email:', email);
    console.log('Entreprise:', entreprise);
    console.log('Téléphone:', telephone);
    console.log('Message:', message);
    console.log('RGPD:', rgpd);
    alert('Message envoyé !');
  };

  return (
    <>
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <nav aria-label="breadcrumb" className="mb-8">
            <ol className="list-none p-0 m-0 inline-flex space-x-4">
              <li>
                <Link to="/" className="text-[#1A1A1A] hover:text-[#4A6FB3]">Accueil</Link>
              </li>
              <li aria-current="page" className="text-gray-500">Contact</li>
            </ol>
          </nav>
          <h1 className="text-3xl font-bold mb-4">Contactez-nous</h1>
          <p className="text-gray-500 mb-8">Notre équipe est à votre écoute pour répondre à toutes vos questions.</p>
        </div>
      </section>

      <section className="bg-[#F5F7FA] py-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-12">
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-4">Envoyez-nous un message</h2>
            <input
              type="text"
              placeholder="Nom"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#4A6FB3] transition-colors mb-4"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#4A6FB3] transition-colors mb-4"
            />
            <input
              type="text"
              placeholder="Entreprise"
              value={entreprise}
              onChange={(e) => setEntreprise(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#4A6FB3] transition-colors mb-4"
            />
            <input
              type="tel"
              placeholder="Téléphone"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#4A6FB3] transition-colors mb-4"
            />
            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#4A6FB3] transition-colors mb-4"
            />
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={rgpd}
                onChange={() => setRgpd(!rgpd)}
                className="mr-2"
              />
              <label>J'accepte d'être recontacté par Luso Business</label>
            </div>
            <button onClick={handleSubmit} className="bg-[#4A6FB3] text-white w-full py-3 rounded-lg font-semibold hover:bg-[#2F4F8F] mt-4">
              Envoyer le message →
            </button>
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-4">Nos coordonnées</h2>
            <div className="flex items-center space-x-4 mb-4">
              <MapPin className="w-5 h-5 text-[#4A6FB3]" />
              <p>2 allée Giaccomo Puccini, 42000 Saint-Etienne</p>
            </div>
            <div className="flex items-center space-x-4 mb-4">
              <Phone className="w-5 h-5 text-[#4A6FB3]" />
              <p>06 07 09 36 71</p>
            </div>
            <div className="flex items-center space-x-4 mb-4">
              <Mail className="w-5 h-5 text-[#4A6FB3]" />
              <p>contact@luso-business.fr</p>
            </div>
            <div className="flex items-center space-x-4 mb-4">
              <Clock className="w-5 h-5 text-[#4A6FB3]" />
              <p>Lun. - Ven. 9h - 18h</p>
            </div>
            <div className="mt-6 rounded-xl overflow-hidden h-52">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5595.8779708365855!2d4.395129!3d45.471033!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f5ad10c7230173%3A0x8ca8d6332e17f38a!2sLuso-Business!5e0!3m2!1sfr!2sus!4v1782285595679!5m2!1sfr!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#2F4F8F] py-12">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div>
            <p className="text-white">Besoin d'un devis rapide ? Obtenez une réponse en 24h.</p>
          </div>
          <button onClick={() => window.scrollTo(0,0)} className="bg-white text-[#2F4F8F] font-semibold px-6 py-3 rounded-lg">
            Demander un devis →
          </button>
        </div>
      </section>
    </>
  );
};

export default Contact;