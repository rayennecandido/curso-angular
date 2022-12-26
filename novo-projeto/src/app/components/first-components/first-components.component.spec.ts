import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstComponentsComponent } from './first-components.component';

describe('FirstComponentsComponent', () => {
  let component: FirstComponentsComponent;
  let fixture: ComponentFixture<FirstComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
