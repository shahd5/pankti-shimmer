import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EffectMakeupComponent } from './effect-makeup.component';

describe('EffectMakeupComponent', () => {
  let component: EffectMakeupComponent;
  let fixture: ComponentFixture<EffectMakeupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EffectMakeupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EffectMakeupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
