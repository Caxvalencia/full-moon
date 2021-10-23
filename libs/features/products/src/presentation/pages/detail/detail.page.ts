import { Subscription } from 'rxjs';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductInteractor } from '@full-moon/features/products/core';

import { DetailViewModel } from './detail.view-model';

@Component({
  selector: 'full-moon-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit, OnDestroy {
  public viewModel = new DetailViewModel();

  private queryStringSubscription$!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private productInteractor: ProductInteractor
  ) {}

  public async ngOnInit() {
    this.processParams();
  }

  public ngOnDestroy(): void {
    this.queryStringSubscription$?.unsubscribe();
  }

  private processParams() {
    this.queryStringSubscription$ = this.route.params.subscribe((param) => {
      this.loadDetail(<string>param.id);
    });
  }

  private async loadDetail(id: string) {
    if (!id) {
      this.viewModel.product = null;

      return;
    }

    try {
      this.viewModel.product = await this.productInteractor.detail(id);
    } catch (error) {
      this.viewModel.product = null;
      console.log(error);
    }
  }
}
