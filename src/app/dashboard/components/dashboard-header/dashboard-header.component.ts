import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Bucket} from '../../interfaces/bucket';
import {AdditionalDashboardInfos} from '../../interfaces/additional-dashboard-infos';

@Component({
  selector: 'aifora-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardHeaderComponent {

  @Input()
  public buckets: Bucket[];

  @Input()
  public additionalDashboardInfos: AdditionalDashboardInfos;

  @Input()
  public activeBucket: number;

  @Input()
  public activeBucketName: string;

  @Output() selectedBucket = new EventEmitter<Bucket>();

  public imgPath = '../assets/images/bracket.svg';

  constructor() {
  }

  public onSelectedBucket($event: Bucket) {
    this.selectedBucket.emit($event);
  }

}
