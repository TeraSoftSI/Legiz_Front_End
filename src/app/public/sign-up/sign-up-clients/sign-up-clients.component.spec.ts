import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpClientsComponent } from './sign-up-clients.component';

describe('SignUpClientsComponent', () => {
  let component: SignUpClientsComponent;
  let fixture: ComponentFixture<SignUpClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
