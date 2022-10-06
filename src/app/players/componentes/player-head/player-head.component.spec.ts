import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerHeadComponent } from './player-head.component';

describe('PlayerHeadComponent', () => {
  let component: PlayerHeadComponent;
  let fixture: ComponentFixture<PlayerHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerHeadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
