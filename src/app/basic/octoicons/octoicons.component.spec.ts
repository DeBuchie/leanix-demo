import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OctoiconsComponent } from './octoicons.component';

describe('OctoiconsComponent', () => {
  let component: OctoiconsComponent;
  let fixture: ComponentFixture<OctoiconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OctoiconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OctoiconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
