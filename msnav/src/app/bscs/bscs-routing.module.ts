import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BscsComponent } from './bscs.component';
import { ShortNumbersComponent } from './short-numbers/short-numbers.component';


const routes: Routes = [
  { path: '', component: BscsComponent },
  { path: 'numbers', component: ShortNumbersComponent, outlet: 'sidenav' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BscsRoutingModule { }
