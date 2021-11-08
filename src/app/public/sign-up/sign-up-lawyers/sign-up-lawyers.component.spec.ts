import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpLawyersComponent } from './sign-up-lawyers.component';

describe('SignUpLawyersComponent', () => {
  let component: SignUpLawyersComponent;
  let fixture: ComponentFixture<SignUpLawyersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpLawyersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpLawyersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
