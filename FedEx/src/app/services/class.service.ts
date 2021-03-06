import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { MatSnackBar, MatDialogConfig, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { DialogService } from './dialog.service';
import { Subject, Observable } from 'rxjs';
import { PopupComponent } from '../components/popup/popup.component';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  private classes = new Subject<any>();
  private selectedClassSubject = new Subject<any>();
  selectedClass = this.selectedClassSubject.asObservable()

  constructor(
    private http: HttpClient,
    private router: Router,
    private dialogService: DialogService,
    private snackBarNotification: MatSnackBar,
    private dialog: MatDialog,
  ) { }

  getClasses() {
    this.http.get(`${environment.serverURL}/class`,
      { headers: { 'Content-Type': 'application/json' } })
      .subscribe((classList) => {
        this.classes.next(classList);
      }, (error) => {
        this.dialogService.openError(error.error.message, error.status);
      });
    return this.classes.asObservable();
  }

  createClass(className: string) {
    this.http.post(`${environment.serverURL}/class`, { className: className }, {
      headers: { 'content-type': 'application/json' }
    }).subscribe((data) => {
      this.snackBarNotification.open(`Your new class code is: ${data['classNumber']}`, 'ok', {
        duration: 5000,
        panelClass: ['snackbar']
      });
    });
  }

  selectClass(className) {
    this.selectedClassSubject.next(className)
  }

  getclassNumber(classId) {
    console.log(classId);
    return this.http.get(`${environment.serverURL}/class/${classId}`, {headers: { 'content-type': 'application/json' }});
  }
}
