import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpBaseComponent } from './sign-up-base.component';

describe('SignUpBaseComponent', () => {
  let component: SignUpBaseComponent;
  let fixture: ComponentFixture<SignUpBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
