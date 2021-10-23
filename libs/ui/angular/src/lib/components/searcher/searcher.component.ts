import { Component, Input } from '@angular/core';

@Component({
  selector: 'full-moon-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss'],
})
export class SearcherComponent {
  @Input() placeholder = '';
  @Input() buttonAriaLabel!: string;
}
