import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcuteComponent } from './acute.component';

describe('AcuteComponent', () => {
  let component: AcuteComponent;
  let fixture: ComponentFixture<AcuteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcuteComponent]
    });
    fixture = TestBed.createComponent(AcuteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
