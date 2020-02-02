import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BscsComponent } from './bscs.component';
import { NumberInfoComponent } from './number-info/number-info.component';
import { DigitsInfoComponent } from './digits-info/digits-info.component';


const routes: Routes = [
  {
    path: '', component: BscsComponent,
    children: [
      { path: 'numberinfo', component: NumberInfoComponent },
      {path: 'digitsinfo', component: DigitsInfoComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BscsRoutingModule { }
