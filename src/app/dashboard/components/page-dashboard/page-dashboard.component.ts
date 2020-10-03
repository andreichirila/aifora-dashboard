import {Component, OnInit} from '@angular/core';
import {DashboardService} from '../../services/dashboard/dashboard.service';
import {map, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Bucket} from '../../interfaces/bucket';
import {ActivatedRoute} from '@angular/router';
import {AdditionalDashboardInfos} from '../../interfaces/additional-dashboard-infos';

@Component({
  selector: 'aifora-page-dashboard',
  templateUrl: './page-dashboard.component.html',
  styleUrls: ['./page-dashboard.component.scss']
})
export class PageDashboardComponent implements OnInit {

  public buckets$: Observable<Bucket[]>;
  public additionalDashboardInfos$: Observable<AdditionalDashboardInfos>;
  public activeBucketId$: Observable<number>;

  constructor(private dashboardService: DashboardService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.initStreams();
  }

  private initStreams() {
    this.buckets$ = this.dashboardService.getDashboardDummyData().pipe(map((res) => res.buckets));
    this.additionalDashboardInfos$ = this.dashboardService.getDashboardDummyData().pipe(map((res) => res.dashboardAdditionalsInfo));
    this.activeBucketId$ = this.activatedRoute.queryParams.pipe(map((queryParams) => +queryParams.activeBucket || 1));
  }

  public onSelectedBucketHeader(e: number) {
    /*
    * Here we could make a specific API request for only one Bucket.
    * For this test we will just retrieve all dummy Bucket Data
    * */
    this.initStreams();

  }
}
