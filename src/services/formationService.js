import { formations, categories } from '../data/formations';

class FormationService {
  getAllFormations() {
    return formations;
  }

  getAllCategories() {
    return categories;
  }

  getFormationBySlug(slug) {
    return formations.find(f => f.slug === slug) || null;
  }

  getFormationsByCategory(categorie) {
    if (categorie === 'Tous' || !categorie) {
      return formations;
    }
    return formations.filter(f => f.categorie === categorie);
  }

  getFormationsWithPdf() {
    return formations.filter(f => f.pdf !== null);
  }

  getFormationsWithPage() {
    return formations.filter(f => f.type === 'page');
  }
}

export const formationService = new FormationService();

export const getAllFormations = () => formationService.getAllFormations();
export const getAllCategories = () => formationService.getAllCategories();
export const getFormationBySlug = (slug) => formationService.getFormationBySlug(slug);
export const getFormationsByCategory = (categorie) => formationService.getFormationsByCategory(categorie);