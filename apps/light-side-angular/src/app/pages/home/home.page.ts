import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'full-moon-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  constructor(private router: Router) {}

  public onSearchPressed(search: string) {
    this.router.navigate(['/items'], { queryParams: { search } });
  }

  public goToHome() {
    this.router.navigate(['/']);
  }
}
