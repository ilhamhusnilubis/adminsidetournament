import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnamentSepakTakrawComponent } from './turnament-sepak-takraw.component';

describe('TurnamentSepakTakrawComponent', () => {
  let component: TurnamentSepakTakrawComponent;
  let fixture: ComponentFixture<TurnamentSepakTakrawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurnamentSepakTakrawComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnamentSepakTakrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
