import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerIdComponent } from './player-id.component';

describe('PlayerIdComponent', () => {
  let component: PlayerIdComponent;
  let fixture: ComponentFixture<PlayerIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
