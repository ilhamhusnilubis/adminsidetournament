import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddturnamentComponent } from './addturnament.component';

describe('AddturnamentComponent', () => {
  let component: AddturnamentComponent;
  let fixture: ComponentFixture<AddturnamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddturnamentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddturnamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
