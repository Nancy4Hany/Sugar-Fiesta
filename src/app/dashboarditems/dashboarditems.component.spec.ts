import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboarditemsComponent } from './dashboarditems.component';

describe('DashboarditemsComponent', () => {
  let component: DashboarditemsComponent;
  let fixture: ComponentFixture<DashboarditemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboarditemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboarditemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
