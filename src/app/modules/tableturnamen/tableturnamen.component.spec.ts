import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableturnamenComponent } from './tableturnamen.component';

describe('TableturnamenComponent', () => {
  let component: TableturnamenComponent;
  let fixture: ComponentFixture<TableturnamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableturnamenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableturnamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
