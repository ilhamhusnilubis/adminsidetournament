import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpanitiaComponent } from './listpanitia.component';

describe('ListpanitiaComponent', () => {
  let component: ListpanitiaComponent;
  let fixture: ComponentFixture<ListpanitiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListpanitiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListpanitiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
