import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BscsRoutingModule } from './bscs-routing.module';
import { BscsComponent } from './bscs.component';
import { NumberInfoComponent } from './number-info/number-info.component';
import { DigitsInfoComponent } from './digits-info/digits-info.component';


@NgModule({
  declarations: [BscsComponent, NumberInfoComponent, DigitsInfoComponent],
  imports: [
    CommonModule,
    BscsRoutingModule
  ]
})
export class BscsModule { }
