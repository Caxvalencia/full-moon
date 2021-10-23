import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { ListConfig } from './list.config';
import { ListViewModel } from './list.view-model';

@Component({
  selector: 'full-moon-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  public viewModel = new ListViewModel();
  public config = ListConfig;

  constructor(private currencyPipe: CurrencyPipe) {}

  public async ngOnInit() {}
}
