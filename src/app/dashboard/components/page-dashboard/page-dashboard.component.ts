import {Component, OnInit} from '@angular/core';
import {DashboardService} from '../../services/dashboard.service';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Bucket} from '../../interfaces/bucket';

@Component({
  selector: 'aifora-page-dashboard',
  templateUrl: './page-dashboard.component.html',
  styleUrls: ['./page-dashboard.component.scss']
})
export class PageDashboardComponent implements OnInit {

  public buckets$: Observable<Bucket[]>;

  constructor(private dashboardService: DashboardService) {
  }

  ngOnInit() {
    this.initStreams();
  }

  private initStreams() {
    this.buckets$ = this.dashboardService.getDashboardDummyData().pipe(map((res) => res.buckets));
  }
}
