import { ApiResponse } from '@amirsavand/ngx-common';
import { Component, OnInit } from '@angular/core';
import { Api } from '@app/shared/classes/api';
import { Utils } from '@app/shared/classes/utils';
import { Product } from '@interfaces/product';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  /** Product list. */
  products: Product[] = [];

  /** API loading. */
  loading = false;

  constructor(public utils: Utils) {
  }

  ngOnInit(): void {
    // Get products.
    this.loading = true;
    Api.product.list().subscribe({
      next: (data: ApiResponse<Product>): void => {
        this.products = data.results;
        this.loading = false;
      },
    });
  }
}
