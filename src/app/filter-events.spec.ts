import { CampusEvent } from './campus-event';
import { filterEvents } from './filter-events';

const EVENTS: CampusEvent[] = [
  {
    id: 1,
    type: 'conference',
    title: 'Les métiers du numérique',
    date: '2026-11-04T10:00:00',
    location: 'Amphi',
    description: 'Rencontre avec des professionnels.',
  },
  {
    id: 2,
    type: 'atelier',
    title: 'Créer sa première API',
    date: '2026-11-05T14:00:00',
    location: 'Salle 204',
    description: 'Découvrez les bonnes pratiques.',
  },
  {
    id: 3,
    type: 'sport',
    title: 'Tournoi de basket',
    date: '2026-11-06T16:30:00',
    location: 'Gymnase',
    description: 'Formez une équipe.',
  },
];

describe('filterEvents', () => {
  it('renvoie tous les événements quand la recherche est vide', () => {
    const resultat = filterEvents(EVENTS, '', 'all');

    expect(resultat.length).toBe(3);
  });

  it('ignore les espaces autour de la recherche', () => {
    const resultat = filterEvents(EVENTS, '   ', 'all');

    expect(resultat.length).toBe(3);
  });

  it('trouve un événement même si la recherche est en MAJUSCULES', () => {
    const resultat = filterEvents(EVENTS, 'BASKET', 'all');

    expect(resultat.length).toBe(1);
    expect(resultat[0].id).toBe(3);
  });

  it('trouve un événement en mélangeant majuscules et minuscules', () => {
    const resultat = filterEvents(EVENTS, 'ApI', 'all');

    expect(resultat.map((e) => e.id)).toEqual([2]);
  });
});
