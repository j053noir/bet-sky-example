import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetManageComponent } from './bet-manage.component';

describe('BetManageComponent', () => {
  let component: BetManageComponent;
  let fixture: ComponentFixture<BetManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
