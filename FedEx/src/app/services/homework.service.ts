import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class HomeworkService {

  constructor(private http: HttpClient) { }

  getHomeworks(classCode: string) {
    return this.http.get(`${environment.serverURL}/homework/${classCode}`, {
      headers: { 'content-type': 'application/json' },
    })
  }

  getOneHomework(id: string) {
    return this.http.get(`${environment.serverURL}/homework/${id}`, {
      headers: { 'content-type': 'application/json' },
    })
  }
}
