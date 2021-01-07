import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnamentBolaVoliComponent } from './turnament-bola-voli.component';

describe('TurnamentBolaVoliComponent', () => {
  let component: TurnamentBolaVoliComponent;
  let fixture: ComponentFixture<TurnamentBolaVoliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurnamentBolaVoliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnamentBolaVoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
