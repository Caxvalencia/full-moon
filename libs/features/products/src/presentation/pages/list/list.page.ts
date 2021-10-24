import { Subscription } from 'rxjs';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductInteractor } from '@full-moon/features/products/core';

import { ListConfig } from './list.config';
import { ListViewModel } from './list.view-model';

interface ListQueryParam {
  search: string;
}

@Component({
  selector: 'full-moon-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit, OnDestroy {
  public viewModel = new ListViewModel();
  public config = ListConfig;

  private queryStringSubscription$!: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productInteractor: ProductInteractor
  ) {}

  public async ngOnInit() {
    this.processQueryString();
  }

  public ngOnDestroy(): void {
    this.queryStringSubscription$?.unsubscribe();
  }

  public goToDetails(productId: string) {
    this.router.navigate([`${this.config.routes.itemsDetail}${productId}`]);
  }

  private processQueryString() {
    this.queryStringSubscription$ = this.route.queryParams.subscribe(
      (queryParam) => {
        if (<ListQueryParam>queryParam.search) {
          this.loadResults(queryParam.search);
        }
      }
    );
  }

  private async loadResults(search: string) {
    try {
      this.viewModel.products = await this.productInteractor.search(search);
      this.viewModel.categories = this.viewModel.products[0].categories;
    } catch (error) {
      console.error(error);
    }
  }
}
