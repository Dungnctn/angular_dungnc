import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppShowValidateComponent } from './app-show-validate.component';

describe('AppShowValidateComponent', () => {
  let component: AppShowValidateComponent;
  let fixture: ComponentFixture<AppShowValidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppShowValidateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppShowValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
