import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'aifora-dashboard-bucket',
  templateUrl: './dashboard-bucket.component.html',
  styleUrls: ['./dashboard-bucket.component.scss']
})
export class DashboardBucketComponent implements OnInit {

  @Input()
  public percent: number = 0;

  @Input()
  public active: number = 0;

  constructor() {
  }

  ngOnInit() {
  }

}
