import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRefreshComponent } from './login-refresh.component';

describe('LoginRefreshComponent', () => {
  let component: LoginRefreshComponent;
  let fixture: ComponentFixture<LoginRefreshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginRefreshComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginRefreshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
