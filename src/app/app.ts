
import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MOCK_EVENTS } from './mock-events';
import { CampusEvent } from './campus-event';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-mds');

  events = MOCK_EVENTS;

  onclick(event: any) {
    console.log('Event clicked:', event);
  }

}
