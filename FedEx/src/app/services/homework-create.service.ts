import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Homework } from '../models/homework.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class HomeworkCreateService {
  // homework: Homework;

  constructor(private http: HttpClient) {}

  sendNewHomework(homework: Homework) {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.post(`${environment.serverURL}/createhomework`, { homework }, { headers }
    );
  }
}
