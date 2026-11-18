import { Component } from '@angular/core';
import { EventsPage } from './events-page/events-page';

@Component({
  selector: 'app-root',
  imports: [EventsPage],
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {}
