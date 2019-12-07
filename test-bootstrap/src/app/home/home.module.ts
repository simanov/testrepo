import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent, AboutComponent, ContactComponent } from './pages';


@NgModule({
  declarations: [HomeComponent, AboutComponent, ContactComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [
    // HomeRoutingModule
  ]
})
export class HomeModule { }
