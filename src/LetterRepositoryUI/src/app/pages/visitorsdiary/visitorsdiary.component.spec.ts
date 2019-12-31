import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorsdiaryComponent } from './visitorsdiary.component';

describe('VisitorsdiaryComponent', () => {
  let component: VisitorsdiaryComponent;
  let fixture: ComponentFixture<VisitorsdiaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorsdiaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorsdiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
