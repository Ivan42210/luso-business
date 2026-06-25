// data/services.js
import {
  Shield,           // Hygiène et sécurité
  Users,            // Ressources Humaines
  Briefcase,        // Management
  Calculator,       // Comptabilité
  FileText,         // Administratif
  Palette           // PAO
} from 'lucide-react';

export const serviceCategories = [
  {
    id: 1,
    title: 'Hygiène et sécurité',
    icon: Shield,
    services: [
      'Levage et manutention',
      'Caristes toutes catégories',
      'Nacelles toutes catégories',
      'Engins de chantier',
      'Pontiers/élingueurs',
      'Habilitation électrique toutes catégories',
      'CHSCT',
      'Document Unique',
      'Secouriste sauveteur du travail',
      'Lutte contre incendie',
      'Manipulation des extincteurs',
      'Equipier de première intervention',
      'Exercice d\'évaluation'
    ]
  },
  {
    id: 2,
    title: 'Ressources Humaines',
    icon: Users,
    services: [
      'Gestion du temps',
      'Gestion des conflits',
      'Gestion du stress',
      'Processus de recrutement',
      'Assurer l\'administration',
      'Tableaux de bord',
      'Cohésion d\'équipe',
      'Responsabiliser votre équipe et développer l\'autonomie de vos collaborateurs'
    ]
  },
  {
    id: 3,
    title: 'Management',
    icon: Briefcase,
    services: [
      'Communication',
      'Piloter',
      'Organiser',
      'Manager',
      'Gestion des conflits',
      'Gestion du temps',
      'Gestion du stress',
      'Prise de parole en public',
      'Conduite de réunion',
      'Besoins interlocuteurs'
    ]
  },
  {
    id: 4,
    title: 'Comptabilité',
    icon: Calculator,
    services: [
      'Tableau de bord',
      'Bilan social'
    ]
  },
  {
    id: 5,
    title: 'Administratif',
    icon: FileText,
    services: [
      'Accueil physique et téléphonique',
      'Gestion du stress, gestion des conflits',
      'Gestion du temps',
      'Communication Professionnelle'
    ]
  },
  {
    id: 6,
    title: 'PAO',
    icon: Palette,
    services: [
      'Photoshop',
      'Illustrator',
      'In-Design',
      'Quark X-Press'
    ]
  }
];