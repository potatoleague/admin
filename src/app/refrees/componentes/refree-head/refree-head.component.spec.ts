import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefreeHeadComponent } from './refree-head.component';

describe('RefreeHeadComponent', () => {
  let component: RefreeHeadComponent;
  let fixture: ComponentFixture<RefreeHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefreeHeadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefreeHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
