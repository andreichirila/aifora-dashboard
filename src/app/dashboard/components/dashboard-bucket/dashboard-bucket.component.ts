import {ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {Bucket} from '../../interfaces/bucket';
import {BucketsService} from '../../services/buckets/buckets.service';

@Component({
  selector: 'aifora-dashboard-bucket',
  templateUrl: './dashboard-bucket.component.html',
  styleUrls: ['./dashboard-bucket.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardBucketComponent implements OnInit {

  @Input()
  public bucketData: Bucket;

  @Input()
  public active: boolean;

  constructor(private bucketService: BucketsService) {
  }

  @Output() selectedBucket = new EventEmitter<Bucket>();

  @HostListener('click')
  onClick() {
    const activeId = this.bucketService.getActiveBucket();
    if (activeId !== this.bucketData.id) {
      this.bucketService.setActiveBucket(this.bucketData.id);
      this.selectedBucket.emit(this.bucketData);
    }
  }

  public ngOnInit() {
  }
}
