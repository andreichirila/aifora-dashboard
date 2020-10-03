import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCircleComponent } from './dashboard-circle.component';

describe('DashboardCircleComponent', () => {
  let component: DashboardCircleComponent;
  let fixture: ComponentFixture<DashboardCircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardCircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
