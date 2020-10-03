import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PageDashboardModuleModule} from './dashboard/page-dashboard-module.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PageDashboardModuleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
