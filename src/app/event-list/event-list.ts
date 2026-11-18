import { Component, input, output } from '@angular/core';
import { CampusEvent } from '../campus-event';
import { EventCard } from '../event-card/event-card';

@Component({
  selector: 'app-event-list',
  imports: [EventCard],
  templateUrl: './event-list.html',
})
export class EventList {
  readonly events = input.required<CampusEvent[]>();

  readonly favoriteToggled = output<number>();
}
