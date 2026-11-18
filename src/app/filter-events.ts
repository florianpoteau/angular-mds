import { CampusEvent, EventCategory } from './campus-event';

export type CategoryFilter = EventCategory | 'all';

export function filterEvents(
  events: CampusEvent[],
  query: string,
  category: CategoryFilter,
): CampusEvent[] {
  const text = query.trim().toLowerCase();

  return events.filter((event) => {
    const bonneCategorie = category === 'all' || event.type === category;

    const bonTexte =
      text === '' ||
      event.title.toLowerCase().includes(text) ||
      event.description.toLowerCase().includes(text);

    return bonneCategorie && bonTexte;
  });
}
