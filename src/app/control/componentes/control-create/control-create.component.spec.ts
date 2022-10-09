import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlCreateComponent } from './control-create.component';

describe('ControlCreateComponent', () => {
  let component: ControlCreateComponent;
  let fixture: ComponentFixture<ControlCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
