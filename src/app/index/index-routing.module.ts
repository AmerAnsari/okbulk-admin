import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index.component';

const routes: Routes = [{
  path: '',
  component: IndexComponent,
  children: [
    {
      path: 'sign-in',
      loadChildren: () => import('./sign-in/sign-in.module').then(m => m.SignInModule),
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexRoutingModule {
}
