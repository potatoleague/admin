import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueHeadComponent } from './league-head.component';

describe('LeagueHeadComponent', () => {
  let component: LeagueHeadComponent;
  let fixture: ComponentFixture<LeagueHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeagueHeadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeagueHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
