import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LurahloginComponent } from './lurahlogin.component';

describe('LurahloginComponent', () => {
  let component: LurahloginComponent;
  let fixture: ComponentFixture<LurahloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LurahloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LurahloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
