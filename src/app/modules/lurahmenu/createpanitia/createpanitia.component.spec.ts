import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatepanitiaComponent } from './createpanitia.component';

describe('CreatepanitiaComponent', () => {
  let component: CreatepanitiaComponent;
  let fixture: ComponentFixture<CreatepanitiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatepanitiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatepanitiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
