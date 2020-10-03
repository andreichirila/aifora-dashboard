import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'aifora-dashboard-circle',
  templateUrl: './dashboard-circle.component.html',
  styleUrls: ['./dashboard-circle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardCircleComponent implements OnInit, OnChanges {

  @Input() active: boolean = false;
  @Input() value: number = 0;

  public readonly radius = 54;
  public readonly circumference = 2 * Math.PI * this.radius;
  public dashoffset: number;

  get percentageText() {
    return `${this.value} %`;
  }

  constructor() {
    this.progress(0);
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.value && (changes.value.currentValue !== changes.value.previousValue)) {
      this.progress(changes.value.currentValue);
    }
  }

  private progress(value: number) {
    const progress = value / 100;
    this.dashoffset = this.circumference * (1 - progress);
  }

}
