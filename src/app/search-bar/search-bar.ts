import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.html',
})
export class SearchBar {
  readonly query = input.required<string>();

  readonly queryChange = output<string>();
}
