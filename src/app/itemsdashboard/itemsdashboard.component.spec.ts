import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsdashboardComponent } from './itemsdashboard.component';

describe('ItemsdashboardComponent', () => {
  let component: ItemsdashboardComponent;
  let fixture: ComponentFixture<ItemsdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
