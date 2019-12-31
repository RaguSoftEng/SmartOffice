import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatselectComponent } from './matselect.component';

describe('MatselectComponent', () => {
  let component: MatselectComponent;
  let fixture: ComponentFixture<MatselectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatselectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
