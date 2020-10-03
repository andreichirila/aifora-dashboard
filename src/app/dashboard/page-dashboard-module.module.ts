import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageDashboardComponent} from './components/page-dashboard/page-dashboard.component';
import {DashboardHeaderComponent} from './components/dashboard-header/dashboard-header.component';
import {DashboardBucketComponent} from './components/dashboard-bucket/dashboard-bucket.component';
import {DashboardCircleComponent} from './components/dashboard-circle/dashboard-circle.component';
import {RouterModule} from '@angular/router';

const components = [];

@NgModule({
  declarations: [PageDashboardComponent, DashboardHeaderComponent, DashboardBucketComponent, DashboardCircleComponent],
  exports: [
    PageDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PageDashboardModuleModule {
}
