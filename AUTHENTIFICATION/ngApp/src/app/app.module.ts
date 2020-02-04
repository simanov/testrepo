import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AgGridModule } from '@ag-grid-community/angular';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { TokenInterceptorService } from './token-interceptor.service';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { AgGridColautosizeComponent } from './ag-grid-colautosize/ag-grid-colautosize.component';
import { AgTreeComponent } from './ag-tree/ag-tree.component';
import { TreeModule } from 'angular-tree-component';
import { JsTreeComponent } from './js-tree/js-tree.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    EventsComponent,
    SpecialEventsComponent,
    AgGridComponent,
    AgGridColautosizeComponent,
    AgTreeComponent,
    JsTreeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AgGridModule.withComponents([]),
    TreeModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
