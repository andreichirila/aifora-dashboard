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

  @Output() selectedBucket = new EventEmitter<number>();

  constructor() {
  }

  public onSelectedBucket($event: number) {
    this.selectedBucket.emit($event);
  }

}
