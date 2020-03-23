import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BscsRoutingModule } from './bscs-routing.module';
import { BscsComponent } from './bscs.component';
import { BscsAsideComponent } from './bscs-aside/bscs-aside.component';
import { ShortNumbersComponent } from './short-numbers/short-numbers.component';


@NgModule({
  declarations: [BscsComponent, BscsAsideComponent, ShortNumbersComponent],
  imports: [
    CommonModule,
    BscsRoutingModule
  ],
  exports: [BscsRoutingModule, BscsComponent, BscsAsideComponent, ShortNumbersComponent]
})
export class BscsModule { }
