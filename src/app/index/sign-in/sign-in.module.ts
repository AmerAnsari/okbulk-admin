import { NgxInputTextModule } from '@amirsavand/ngx-input';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { GeneralErrorModule } from '@modules/general-error/general-error.module';

import { SignInRoutingModule } from './sign-in-routing.module';
import { SignInComponent } from './sign-in.component';


@NgModule({
  declarations: [
    SignInComponent,
  ],
  imports: [
    CommonModule,
    SignInRoutingModule,
    ReactiveFormsModule,
    NgxInputTextModule,
    GeneralErrorModule,
  ],
})
export class SignInModule {
}
