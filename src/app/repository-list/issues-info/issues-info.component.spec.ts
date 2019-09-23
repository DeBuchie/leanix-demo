import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuesInfoComponent } from './issues-info.component';

describe('IssuesInfoComponent', () => {
  let component: IssuesInfoComponent;
  let fixture: ComponentFixture<IssuesInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssuesInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
