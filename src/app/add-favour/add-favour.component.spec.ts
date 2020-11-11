import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFavourComponent } from './add-favour.component';

describe('AddFavourComponent', () => {
  let component: AddFavourComponent;
  let fixture: ComponentFixture<AddFavourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFavourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFavourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
