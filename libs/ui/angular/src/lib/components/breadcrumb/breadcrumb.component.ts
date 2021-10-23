import { Component, Input } from '@angular/core';

@Component({
  selector: 'full-moon-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent {
  @Input() public breads: string[] = [];
}
