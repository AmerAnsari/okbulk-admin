import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './dash.component';

const routes: Routes = [{
  path: '',
  component: DashComponent,
  children: [
    {
      path: 'products',
      loadChildren: () => import('./products/products.module').then(m => m.ProductsModule),
    },
    {
      path: '**',
      pathMatch: 'full',
      redirectTo: 'products',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashRoutingModule {
}
