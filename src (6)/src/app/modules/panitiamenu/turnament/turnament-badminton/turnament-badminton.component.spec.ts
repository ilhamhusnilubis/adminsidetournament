import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnamentBadmintonComponent } from './turnament-badminton.component';

describe('TurnamentBadmintonComponent', () => {
  let component: TurnamentBadmintonComponent;
  let fixture: ComponentFixture<TurnamentBadmintonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurnamentBadmintonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnamentBadmintonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
