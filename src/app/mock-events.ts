import { CampusEvent, CampusEventBase } from "./campus-event";


export const MOCK_EVENTS: CampusEventBase[] = [
  {
    id: 1,
    type: 'conference',
    title: 'Les métiers du numérique de demain',
    date: '2026-11-04T10:00:00',
    location: 'Amphithéâtre Ada Lovelace',
    description: 'Une rencontre avec des professionnels pour explorer les nouveaux métiers de la tech.',
    capacity: 120,
  },
  {
    id: 2,
    type: 'atelier',
    title: 'Créer sa première API',
    date: '2026-11-05T14:00:00',
    location: 'Salle de projet 204',
    description: 'Concevez une API simple et découvrez les bonnes pratiques pour la documenter.',
    capacity: 18,
  },
  {
    id: 3,
    type: 'sport',
    title: 'Tournoi de basket inter-promos',
    date: '2026-11-06T16:30:00',
    location: 'Gymnase du campus',
    description: 'Formez une équipe et venez défendre les couleurs de votre promotion.',
  },
  {
    id: 4,
    type: 'atelier',
    title: 'Portfolio : du projet à la vitrine',
    date: '2026-11-10T09:30:00',
    location: 'Studio créatif',
    description: 'Apprenez à raconter vos projets et à construire un portfolio qui vous ressemble.',
    capacity: 24,
  },
  {
    id: 5,
    type: 'conference',
    title: 'L’intelligence artificielle responsable',
    date: '2026-11-12T11:00:00',
    location: 'Auditorium Simone Veil',
    description: 'Un échange autour des usages, des limites et des responsabilités de l’IA.',
    capacity: 90,
  },
  {
    id: 6,
    type: 'sport',
    title: 'Course au lever du jour',
    date: '2026-11-14T08:00:00',
    location: 'Parc des Bords de Loire',
    description: 'Une sortie accessible à tous pour découvrir les chemins autour du campus.',
    capacity: 30,
  },
];
