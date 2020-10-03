import {Component, Input, OnInit} from '@angular/core';
import {Bucket} from '../../interfaces/bucket';

@Component({
  selector: 'aifora-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss']
})
export class DashboardHeaderComponent implements OnInit {

  @Input()
  public buckets: Bucket[];

  constructor() {
  }

  ngOnInit() {
    console.log(this.buckets);
  }

}
