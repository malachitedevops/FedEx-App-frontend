import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { DialogService } from './dialog.service';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  private classes = new Subject<any>();

  constructor(private http: HttpClient, private router: Router, private dialogService: DialogService) { }

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

}
