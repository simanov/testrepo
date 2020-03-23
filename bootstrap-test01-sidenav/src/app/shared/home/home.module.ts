import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent, AboutComponent, ContactsComponent } from './pages';

@NgModule({
  declarations: [HomeComponent, AboutComponent, ContactsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
