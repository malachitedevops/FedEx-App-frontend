import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ErrorDialogComponent } from './error-dialog.component';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

describe('ErrorDialogComponent', () => {
  let component: ErrorDialogComponent;
  let fixture: ComponentFixture<ErrorDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorDialogComponent],
      imports: [
        MatDialogModule
      ],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: [{message: 'hello', code: '499'}] }
      ]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(ErrorDialogComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a button with "OK"', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button').innerHTML).toBe('OK');
  });
});
