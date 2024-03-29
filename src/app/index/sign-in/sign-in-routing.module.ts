import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from 'src/app/index/sign-in/sign-in.component';

const routes: Routes = [{
  path: '',
  component: SignInComponent,
  data: {
    title: 'Sign In',
  },
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignInRoutingModule {
}
