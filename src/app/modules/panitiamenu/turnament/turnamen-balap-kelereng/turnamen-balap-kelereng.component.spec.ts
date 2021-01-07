import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnamenBalapKelerengComponent } from './turnamen-balap-kelereng.component';

describe('TurnamenBalapKelerengComponent', () => {
  let component: TurnamenBalapKelerengComponent;
  let fixture: ComponentFixture<TurnamenBalapKelerengComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurnamenBalapKelerengComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnamenBalapKelerengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
