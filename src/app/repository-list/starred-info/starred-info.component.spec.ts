import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarredInfoComponent } from './starred-info.component';

describe('StarredInfoComponent', () => {
  let component: StarredInfoComponent;
  let fixture: ComponentFixture<StarredInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarredInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarredInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
