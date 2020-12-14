import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListturnamenComponent } from './listturnamen.component';

describe('ListturnamenComponent', () => {
  let component: ListturnamenComponent;
  let fixture: ComponentFixture<ListturnamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListturnamenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListturnamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
