import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class HomeworkService {

  constructor(private http: HttpClient) { }

  getHomeworks(classCode: string) {
    return this.http.get(`${environment.serverURL}/homework?classCode=${classCode}`, {
      headers: { 'content-type': 'application/json' },
    })
  }

  getOneHomework(id: string) {
    return this.http.get(`${environment.serverURL}/homework?id=${id}`, {
      headers: { 'content-type': 'application/json' },
    });
  }

  submitSolution(homeworkId, username, content, userPhoto) {
    return this.http.post(`${environment.serverURL}/homework/solution`, {homeworkId, username, content, userPhoto}, {headers: { 'content-type': 'application/json' }}
    );
  }

  approveSolution(solutionId) {
    console.log('approve service')
    return this.http.patch(`${environment.serverURL}/homework/${solutionId}`, {headers: { 'content-type': 'application/json' }});
  }

}
