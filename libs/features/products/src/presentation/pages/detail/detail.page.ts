import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';

import { DetailViewModel } from './detail.view-model';

@Component({
  selector: 'full-moon-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage {
  public viewModel = new DetailViewModel();

  constructor(private currencyPipe: CurrencyPipe) {}
}
