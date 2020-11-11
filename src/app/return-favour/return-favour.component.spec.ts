import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnFavourComponent } from './return-favour.component';

describe('ReturnFavourComponent', () => {
  let component: ReturnFavourComponent;
  let fixture: ComponentFixture<ReturnFavourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnFavourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnFavourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
