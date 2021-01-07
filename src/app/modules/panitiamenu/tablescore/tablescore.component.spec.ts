import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablescoreComponent } from './tablescore.component';

describe('TablescoreComponent', () => {
  let component: TablescoreComponent;
  let fixture: ComponentFixture<TablescoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablescoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablescoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
