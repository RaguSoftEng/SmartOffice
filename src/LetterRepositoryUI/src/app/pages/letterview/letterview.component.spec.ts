import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterviewComponent } from './letterview.component';

describe('LetterviewComponent', () => {
  let component: LetterviewComponent;
  let fixture: ComponentFixture<LetterviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetterviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
