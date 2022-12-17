import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardusersComponent } from './dashboardusers.component';

describe('DashboardusersComponent', () => {
  let component: DashboardusersComponent;
  let fixture: ComponentFixture<DashboardusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardusersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
