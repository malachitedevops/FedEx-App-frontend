import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { DialogService } from './dialog.service';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  private classes = new Subject<any>();

  constructor(
    private http: HttpClient, 
    private router: Router, 
    private dialogService: DialogService,
    private snackBarNotification: MatSnackBar
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

  createClass(className:string){
    this.http.post(`${environment.serverURL}/class`, { className:className }, {
      headers: { 'content-type': 'application/json' }
    }).subscribe(() => {
      this.snackBarNotification.open('class added', 'ok', {
        duration: 5000,
        panelClass: ['snackbar']
      });
    });
  }

  getclassNumber(classId) {
    console.log('itt')
    return this.http.get(`${environment.serverURL}/class/${classId}`, {headers: { 'content-type': 'application/json' }});
  }
}

