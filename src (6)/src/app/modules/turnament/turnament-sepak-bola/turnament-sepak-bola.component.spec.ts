import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnamentSepakBolaComponent } from './turnament-sepak-bola.component';

describe('TurnamentSepakBolaComponent', () => {
  let component: TurnamentSepakBolaComponent;
  let fixture: ComponentFixture<TurnamentSepakBolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurnamentSepakBolaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnamentSepakBolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
