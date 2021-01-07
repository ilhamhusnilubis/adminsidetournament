import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnamenBalapKarungComponent } from './turnamen-balap-karung.component';

describe('TurnamenBalapKarungComponent', () => {
  let component: TurnamenBalapKarungComponent;
  let fixture: ComponentFixture<TurnamenBalapKarungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurnamenBalapKarungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnamenBalapKarungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
