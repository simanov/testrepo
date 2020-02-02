import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent, FooterComponent } from './layout';



@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
