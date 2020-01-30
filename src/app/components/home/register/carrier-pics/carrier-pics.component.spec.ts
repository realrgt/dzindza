import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrierPicsComponent } from './carrier-pics.component';

describe('CarrierPicsComponent', () => {
  let component: CarrierPicsComponent;
  let fixture: ComponentFixture<CarrierPicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrierPicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrierPicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
