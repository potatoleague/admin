import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefreeUpdateComponent } from './refree-update.component';

describe('RefreeUpdateComponent', () => {
  let component: RefreeUpdateComponent;
  let fixture: ComponentFixture<RefreeUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefreeUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefreeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
