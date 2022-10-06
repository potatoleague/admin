import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlHeadComponent } from './control-head.component';

describe('ControlHeadComponent', () => {
  let component: ControlHeadComponent;
  let fixture: ComponentFixture<ControlHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlHeadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
