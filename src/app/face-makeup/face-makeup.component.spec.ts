import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceMakeupComponent } from './face-makeup.component';

describe('FaceMakeupComponent', () => {
  let component: FaceMakeupComponent;
  let fixture: ComponentFixture<FaceMakeupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaceMakeupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaceMakeupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
