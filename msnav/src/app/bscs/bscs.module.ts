import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BscsRoutingModule } from './bscs-routing.module';
import { BscsComponent } from './bscs.component';
import { BscsAsideComponent } from './bscs-aside/bscs-aside.component';
import { ShortNumbersComponent } from './short-numbers/short-numbers.component';
import { Other0Component } from './other0/other0.component';


@NgModule({
  declarations: [BscsComponent, BscsAsideComponent, ShortNumbersComponent, Other0Component],
  imports: [
    CommonModule,
    BscsRoutingModule
  ],
  exports: []
})
export class BscsModule { }
