import { Component, input, output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { CampusEvent } from '../campus-event';

@Component({
  selector: 'app-event-card',
  imports: [DatePipe],
  templateUrl: './event-card.html',
})
export class EventCard {
  readonly event = input.required<CampusEvent>();

  readonly favoriteToggled = output<number>();
}
