import { Component } from '@angular/core';

@Component({
  selector: 'full-moon-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent {
  public breads: string[] = [
    'Electronica, Audio y Video',
    'iPod',
    'Apple',
    'Apple iPod touch',
    '32GB',
  ];
}
