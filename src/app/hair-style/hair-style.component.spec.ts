import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HairStyleComponent} from './hair-style.component';

describe('HairMakeupComponent', () => {
  let component: HairStyleComponent;
  let fixture: ComponentFixture<HairStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HairStyleComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HairStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
