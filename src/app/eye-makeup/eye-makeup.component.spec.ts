import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EyeMakeupComponent } from './eye-makeup.component';

describe('EyeMakeupComponent', () => {
  let component: EyeMakeupComponent;
  let fixture: ComponentFixture<EyeMakeupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EyeMakeupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EyeMakeupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
