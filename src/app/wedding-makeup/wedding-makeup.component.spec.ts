import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingMakeupComponent } from './wedding-makeup.component';

describe('WeddingMakeupComponent', () => {
  let component: WeddingMakeupComponent;
  let fixture: ComponentFixture<WeddingMakeupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeddingMakeupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeddingMakeupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
