import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cityguide } from './cityguide';

describe('Cityguide', () => {
  let component: Cityguide;
  let fixture: ComponentFixture<Cityguide>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cityguide]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cityguide);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
