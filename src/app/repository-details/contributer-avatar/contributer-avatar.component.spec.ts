import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributerAvatarComponent } from './contributer-avatar.component';

describe('ContributerAvatarComponent', () => {
  let component: ContributerAvatarComponent;
  let fixture: ComponentFixture<ContributerAvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContributerAvatarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributerAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
