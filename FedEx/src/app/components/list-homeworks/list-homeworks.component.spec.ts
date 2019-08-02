import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHomeworksComponent } from './list-homeworks.component';
import { MatCardModule } from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('ListHomeworksComponent', () => {
  let component: ListHomeworksComponent;
  let fixture: ComponentFixture<ListHomeworksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListHomeworksComponent ],
      imports: [
        MatCardModule,
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHomeworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
