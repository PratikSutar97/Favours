import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberFavoursComponent } from './member-favours.component';

describe('MemberFavoursComponent', () => {
  let component: MemberFavoursComponent;
  let fixture: ComponentFixture<MemberFavoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberFavoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberFavoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
