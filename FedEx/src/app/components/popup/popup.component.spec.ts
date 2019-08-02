import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PopupComponent } from './popup.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialogModule, MatSnackBarModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

describe('PopupComponent', () => {
  let component: PopupComponent;
  let fixture: ComponentFixture<PopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        MatDialogModule,
        MatSnackBarModule,
        
      ],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
