import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BscsComponent } from './bscs.component';
import { ShortNumbersComponent } from './short-numbers/short-numbers.component';
import { Other0Component } from './other0/other0.component';


const routes: Routes = [
  {
    path: '', component: BscsComponent, children: [
      { path: 'numbers', component: ShortNumbersComponent },
      { path: 'other0', component: Other0Component },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BscsRoutingModule { }
