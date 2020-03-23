import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BscsRoutingModule } from './bscs-routing.module';
import { BscsComponent } from './bscs/bscs.component';
import { NumbersComponent } from './numbers/numbers.component';


@NgModule({
  declarations: [BscsComponent, NumbersComponent],
  imports: [
    CommonModule,
    BscsRoutingModule
  ],
  exports: [BscsComponent, NumbersComponent, BscsRoutingModule]
})
export class BscsModule { }
