import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenFaceMakeupComponent } from './children-face-makeup.component';

describe('ChildrenFaceMakeupComponent', () => {
  let component: ChildrenFaceMakeupComponent;
  let fixture: ComponentFixture<ChildrenFaceMakeupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildrenFaceMakeupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildrenFaceMakeupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
