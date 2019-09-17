import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagedotComponent } from './languagedot.component';

describe('LanguagedotComponent', () => {
  let component: LanguagedotComponent;
  let fixture: ComponentFixture<LanguagedotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguagedotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguagedotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
