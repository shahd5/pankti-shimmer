import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PartyMakeupComponent} from './party-makeup.component';

describe('EyeMakeupComponent', () => {
  let component: PartyMakeupComponent;
  let fixture: ComponentFixture<PartyMakeupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartyMakeupComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PartyMakeupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
