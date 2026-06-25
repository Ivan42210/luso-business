// Imports des images
import fleImage from '../assets/Photos/FLE.png';
import portugaisImage from '../assets/Photos/portugais.jpg';
import duerpImage from '../assets/Photos/DUERP.png';
import rgpdImage from '../assets/Photos/RGPD.png';
import managementImage from '../assets/Photos/management.png';
import fleSportifImage from '../assets/Photos/fle-football.png';
import divaltoImage from '../assets/Photos/divalto.png';

// Imports des PDFs – Chemins CORRECTS (sans sous-dossier)
import flePdf from '../assets/PDFs/PF-FLE_VERSION_2026.pdf';
import portugaisPdf from '../assets/PDFs/PF-Portugais_VERSION_2026.pdf';
import rgpdPdf from '../assets/PDFs/PF_RGPD_VERSION_2026.pdf';
import managementPdf from '../assets/PDFs/MANAGEMENT-niveau-1-EXPERT.pdf';
import fleSportifPdf from '../assets/PDFs/FLE-FOOT.pdf';

export const formations = [
  {
    id: 1,
    slug: 'fle',
    categorie: 'Langues',
    titre: 'FLE',
    sousTitre: 'Français Langue Étrangère',
    description: 'Développez les compétences en français de vos équipes.',
    image: fleImage,
    pdf: flePdf,
    type: 'pdf'
  },
  {
    id: 2,
    slug: 'portugais',
    categorie: 'Langues',
    titre: 'Portugais',
    sousTitre: 'Professionnel',
    description: 'Des formations adaptées à vos besoins métier.',
    image: portugaisImage,
    pdf: portugaisPdf,
    type: 'pdf'
  },
  {
    id: 3,
    slug: 'duerp',
    categorie: 'Prévention des risques',
    titre: 'DUERP',
    sousTitre: 'Document Unique',
    description: 'Évaluez et prévenez les risques dans votre entreprise.',
    image: duerpImage,
    pdf: null,
    type: 'pdf'
  },
  {
    id: 4,
    slug: 'rgpd',
    categorie: 'Prévention des risques',
    titre: 'RGPD',
    sousTitre: 'Protection des données',
    description: 'Mettez votre entreprise en conformité avec le RGPD.',
    image: rgpdImage,
    pdf: rgpdPdf,
    type: 'pdf'
  },
  {
    id: 5,
    slug: 'management',
    categorie: 'Management',
    titre: 'Management & Leadership',
    sousTitre: '',
    description: 'Développez vos managers et vos équipes.',
    image: managementImage,
    pdf: managementPdf,
    type: 'pdf'
  },
  {
    id: 6,
    slug: 'fle-sportif',
    categorie: 'Langues',
    titre: 'FLE en milieu sportif',
    sousTitre: '',
    description: 'Des formations spécifiques pour le secteur sportif.',
    image: fleSportifImage,
    pdf: fleSportifPdf,
    type: 'pdf'
  },
  {
    id: 7,
    slug: 'divalto',
    categorie: 'Informatique / ERP',
    titre: 'Formations DIVALTO',
    sousTitre: '',
    description: 'Des parcours spécialisés pour vos projets Divalto ERP.',
    image: divaltoImage,
    pdf: null,
    type: 'page'
  }
];

export const categories = ['Tous', 'Langues', 'Prévention des risques', 'Management', 'Informatique / ERP'];