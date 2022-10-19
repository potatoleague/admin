import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueConfigComponent } from './league-config.component';

describe('LeagueConfigComponent', () => {
  let component: LeagueConfigComponent;
  let fixture: ComponentFixture<LeagueConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeagueConfigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeagueConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
