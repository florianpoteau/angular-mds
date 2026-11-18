import { Component, computed, effect, signal } from '@angular/core';
import { MOCK_EVENTS } from '../mock-events';
import { CategoryFilter, filterEvents } from '../filter-events';
import { SearchBar } from '../search-bar/search-bar';
import { EventList } from '../event-list/event-list';

const STORAGE_KEY = 'campus-events.category';

const CATEGORIES_VALIDES: CategoryFilter[] = ['all', 'conference', 'atelier', 'sport'];

function estUneCategorie(value: string | null): value is CategoryFilter {
  return CATEGORIES_VALIDES.includes(value as CategoryFilter);
}

function lireCategorieSauvegardee(): CategoryFilter {
  try {
    const sauvegarde = localStorage.getItem(STORAGE_KEY);
    return estUneCategorie(sauvegarde) ? sauvegarde : 'all';
  } catch {
    return 'all';
  }
}

@Component({
  selector: 'app-events-page',
  imports: [SearchBar, EventList],
  templateUrl: './events-page.html',
})
export class EventsPage {
  readonly query = signal('');
  readonly category = signal<CategoryFilter>(lireCategorieSauvegardee());

  readonly visibleEvents = computed(() =>
    filterEvents(MOCK_EVENTS, this.query(), this.category()),
  );

  readonly resultCount = computed(() => this.visibleEvents().length);

  constructor() {
    effect(() => {
      const categorie = this.category();
      try {
        localStorage.setItem(STORAGE_KEY, categorie);
      } catch {
        console.log("sa marche pas, localStorage indisponible (navigation privée, etc.)");
      }
    });
  }

  onCategoryChange(value: string) {
    if (estUneCategorie(value)) {
      this.category.set(value);
    }
  }

  onFavoriteToggled(eventId: number) {
    console.log('Favori basculé pour l’événement', eventId);
  }
}
