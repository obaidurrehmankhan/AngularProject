import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksListingComponent } from './tasks-listing.component';

describe('TasksListingComponent', () => {
  let component: TasksListingComponent;
  let fixture: ComponentFixture<TasksListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
