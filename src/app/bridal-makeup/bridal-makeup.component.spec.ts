import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BridalMakeupComponent} from './bridal-makeup.component';

describe('FaceMakeupComponent', () => {
  let component: BridalMakeupComponent;
  let fixture: ComponentFixture<BridalMakeupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BridalMakeupComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BridalMakeupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
