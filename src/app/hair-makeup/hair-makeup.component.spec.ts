import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HairMakeupComponent } from './hair-makeup.component';

describe('HairMakeupComponent', () => {
  let component: HairMakeupComponent;
  let fixture: ComponentFixture<HairMakeupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HairMakeupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HairMakeupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
