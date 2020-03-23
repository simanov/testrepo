import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductListSidebarComponent } from './product-list-sidebar/product-list-sidebar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';


const routes: Routes = [
  { path: 'productslist', component: ProductListComponent, outlet: 'right' },
  { path: 'product/:id', component: ProductDetailComponent },
  {
    path: '',
    component: SidebarComponent,
    outlet: 'sidebar'
  },
  {
    path: 'products',
    component: ProductListSidebarComponent,
    outlet: 'sidebar'
  },
  {
    path: 'bscs',
    loadChildren: () => import('./bscs/bscs.module').then(m => m.BscsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
