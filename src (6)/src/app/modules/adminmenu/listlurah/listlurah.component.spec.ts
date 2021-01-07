import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListlurahComponent } from './listlurah.component';

describe('ListlurahComponent', () => {
  let component: ListlurahComponent;
  let fixture: ComponentFixture<ListlurahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListlurahComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListlurahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
