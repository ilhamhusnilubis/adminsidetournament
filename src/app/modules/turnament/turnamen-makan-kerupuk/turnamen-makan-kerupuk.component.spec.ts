import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnamenMakanKerupukComponent } from './turnamen-makan-kerupuk.component';

describe('TurnamenMakanKerupukComponent', () => {
  let component: TurnamenMakanKerupukComponent;
  let fixture: ComponentFixture<TurnamenMakanKerupukComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurnamenMakanKerupukComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnamenMakanKerupukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
