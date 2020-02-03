import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { AgGridColautosizeComponent } from './ag-grid-colautosize/ag-grid-colautosize.component';
import { AgTreeComponent } from './ag-tree/ag-tree.component';


const routes: Routes = [
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'events', component: EventsComponent },
  { path: 'special', component: SpecialEventsComponent, canActivate: [AuthGuard] },
  { path: 'ag-grid', component: AgGridComponent },
  { path: 'agg-autosize', component: AgGridColautosizeComponent },
  { path: 'ag-tree', component: AgTreeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
