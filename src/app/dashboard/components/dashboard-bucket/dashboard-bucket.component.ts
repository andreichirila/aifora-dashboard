import {Component, Input, OnInit} from '@angular/core';
import {Bucket} from '../../interfaces/bucket';

@Component({
  selector: 'aifora-dashboard-bucket',
  templateUrl: './dashboard-bucket.component.html',
  styleUrls: ['./dashboard-bucket.component.scss']
})
export class DashboardBucketComponent implements OnInit {

  @Input()
  public bucketData: Bucket;

  @Input()
  public active: number = 0;

  constructor() {
  }

  ngOnInit() {
  }

}
