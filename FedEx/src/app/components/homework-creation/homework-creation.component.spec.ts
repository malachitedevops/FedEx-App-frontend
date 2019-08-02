import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeworkCreationComponent } from './homework-creation.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatSelectModule, MatDatepickerModule, MatSnackBarModule, MatNativeDateModule } from '@angular/material';

describe('HomeworkCreationComponent', () => {
  let component: HomeworkCreationComponent;
  let fixture: ComponentFixture<HomeworkCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeworkCreationComponent ],
      imports: [
        FormsModule, 
        ReactiveFormsModule, 
        MatInputModule,
        MatSelectModule,
        MatDatepickerModule,
        HttpClientTestingModule,
        RouterTestingModule,
        MatSnackBarModule,
        MatNativeDateModule,
        BrowserAnimationsModule
      ]
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
