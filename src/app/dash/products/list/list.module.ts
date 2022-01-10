import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TruncateModule } from '@modules/truncate/truncate.module';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';


@NgModule({
  declarations: [
    ListComponent,
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    TruncateModule,
  ],
})
export class ListModule {
}
