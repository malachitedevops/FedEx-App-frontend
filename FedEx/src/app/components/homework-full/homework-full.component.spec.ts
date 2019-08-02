import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworkFullComponent } from './homework-full.component';

describe('HomeworkFullComponent', () => {
  let component: HomeworkFullComponent;
  let fixture: ComponentFixture<HomeworkFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeworkFullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeworkFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
