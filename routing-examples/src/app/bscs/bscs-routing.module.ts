import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BscsComponent } from './bscs/bscs.component';
import { NumbersComponent } from './numbers/numbers.component';


const routes: Routes = [
  {
    path: '', component: BscsComponent,
  },
  {
    path: 'numbers',
    component: NumbersComponent,
    outlet: 'bscsdetails'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BscsRoutingModule { }
