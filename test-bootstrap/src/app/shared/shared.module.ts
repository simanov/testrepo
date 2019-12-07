import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent, FooterComponent } from './layout';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [
    CommonModule, RouterModule, HeaderComponent, FooterComponent
  ]
})
export class SharedModule { }
