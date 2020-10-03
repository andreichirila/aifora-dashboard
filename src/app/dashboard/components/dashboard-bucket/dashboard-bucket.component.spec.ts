import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardBucketComponent } from './dashboard-bucket.component';

describe('DashboardBucketComponent', () => {
  let component: DashboardBucketComponent;
  let fixture: ComponentFixture<DashboardBucketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardBucketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardBucketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
