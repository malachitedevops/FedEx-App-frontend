import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworkCreationComponent } from './homework-creation.component';

describe('HomeworkCreationComponent', () => {
  let component: HomeworkCreationComponent;
  let fixture: ComponentFixture<HomeworkCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeworkCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeworkCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
