import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFormLawyerComponent } from './card-form-lawyer.component';

describe('CardFormLawyerComponent', () => {
  let component: CardFormLawyerComponent;
  let fixture: ComponentFixture<CardFormLawyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardFormLawyerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFormLawyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
