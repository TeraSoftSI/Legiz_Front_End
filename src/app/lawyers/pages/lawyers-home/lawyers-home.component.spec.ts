import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawyersHomeComponent } from './lawyers-home.component';

describe('LawyersHomeComponent', () => {
  let component: LawyersHomeComponent;
  let fixture: ComponentFixture<LawyersHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LawyersHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LawyersHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
