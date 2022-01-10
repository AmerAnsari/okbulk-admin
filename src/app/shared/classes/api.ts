import { Crud, ApiResponse } from '@amirsavand/ngx-common';
import { environment } from '@environments/environment';
import { Product } from '@interfaces/product';

export class Api {
  static readonly BASE = environment.api;

  static readonly product = new Crud<Product, ApiResponse<Product>>('product')
}
