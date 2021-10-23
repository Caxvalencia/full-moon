import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'full-moon-root',
  styles: [
    `
      .content {
        max-width: 1200px;
        width: 100%;
        margin: 0 auto;
        padding-bottom: 50px;
      }
    `,
  ],
  template: `
    <full-moon-header
      (searchPressed)="onSearchPressed($event)"
    ></full-moon-header>

    <main class="content">
      <router-outlet></router-outlet>
    </main>
  `,
})
export class AppComponent {
  constructor(private router: Router) {}

  public onSearchPressed(search: string) {
    this.router.navigate(['/items'], { queryParams: { search } });
  }
}
