import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'full-moon-root',
  styles: [
    `
      .header {
        background-color: var(--color-primary);
        height: 48px;
        padding: 5px;

        &__toolbar {
          width: 100%;
          max-width: 1200px;
          position: relative;
        }
      }

      .toolbar {
        &__logo {
          height: 40px;
          margin-right: 25px;
        }

        &__searcher {
          flex-grow: 1;
        }
      }

      .content {
        max-width: 1200px;
        width: 100%;
        margin: 0 auto;
      }
    `,
  ],
  template: `
    <header class="header flex">
      <div class="header__toolbar flex">
        <img
          src="/assets/images/logo.png"
          class="toolbar__logo"
          alt="Logo de mercado libre"
        />

        <div class="toolbar__searcher">
          <full-moon-searcher
            placeholder="Nunca dejes de buscar"
            buttonAriaLabel="Buscar"
            (searchPressed)="onSearchPressed($event)"
          ></full-moon-searcher>
        </div>
      </div>
    </header>

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
