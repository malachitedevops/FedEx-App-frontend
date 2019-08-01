import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(private http: HttpClient, private snackBarNotification: MatSnackBar) { }

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
}
    
  

