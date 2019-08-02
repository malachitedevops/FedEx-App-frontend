import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Homework } from '../../models/homework';
import { ActivatedRoute } from '@angular/router';
import { HomeworkService } from 'src/app/services/homework.service';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ClassService } from 'src/app/services/class.service';

@Component({
  selector: 'app-homework-full',
  templateUrl: './homework-full.component.html',
  styleUrls: ['./homework-full.component.sass']
})
export class HomeworkFullComponent implements OnInit, OnDestroy {

  public homework: any = {
    _id: '5d42d458a42a24355ced7f9a',
    created: '2019-08-01T12:00:23.013+00:00',
    teacherName: "TT",
    title: "Fibonacci",
    shortDesc: "N-ht element of Fibonacchi sequence",
    content: "Calculate the 25th element of Fibo sequence",
    subject: "Math",
    classCode: "10001",
    className: "1B",
    deadline: '2019-08-14T22:00:00.000+00:00',
    solutions: [
      {
      _id: '5d432b2d7909eb62663ffc6b',
      timestamp: '2019-08-01',
      approved: true,
      username: "user",
      content: "Hello",
      },
      {
      _id: '5d432b2d7909eb62663ffc6b',
      timestamp: '2019-08-01',
      approved: true,
      username: "tomiS",
      content: "Hello",
      }
    ]
  };
  public isTeacher;
  public haveSolution;
  private url: string;
  private homeWorkSubs: Subscription;
  private userRole: string;
  private userName: string;
  private classNumber: number;
  private userAvatar: string



  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private homeworkService: HomeworkService,
    private authenticationService: AuthenticationService,
    private classService: ClassService) { }

  ngOnInit() {
    //Get login user role
    this.userRole = this.authenticationService.getUserRoleLocal();
    this.userRole === 'teacher' ? this.isTeacher = true : this.isTeacher = false;
    this.userName = this.authenticationService.getUsernameLocal();
    this.userAvatar = this.authenticationService.getUserAvatarLocal();

    //Get homework from URL by id
    this.url = this.route.snapshot.queryParams.homeworkId;
    this.homeWorkSubs = this.homeworkService.getOneHomework(this.url).subscribe(response => {
      this.homework = response[0];
      this.homework.solutions.map(solution => {
        solution.timestamp = solution.timestamp.split('T')[0];
      });
      const studentSolutionArr = this.homework.solutions.filter(solution => solution.username === this.userName);
      studentSolutionArr.length !== 0 ? this.haveSolution = true : this.haveSolution = false;
      this.classService.getclassNumber(this.homework.classCode).subscribe(response => this.classNumber = response['number'])
    })

    // setTimeout(()=> {
    //   //this.submitSolution();
    //   this.approveSolution();
    // },1000)
  }

  ngOnDestroy() {
    this.homeWorkSubs.unsubscribe();
  }

  //Submit new solution if user is student
  submitSolution(content?: string) {
    if (this.userRole === 'student') {
      // const content = 'HelloÚj2'; //form['content']
      this.homeworkService.submitSolution(this.homework._id, this.userName, content, this.userAvatar).subscribe(response => {
        if (response['message'] === 'solution added') {
          this.haveSolution = true;
          this.homeWorkSubs = this.homeworkService.getOneHomework(this.url).subscribe(response => {
            this.homework = response[0];
            this.homework.solutions.map(solution => {
              solution.timestamp = solution.timestamp.split('T')[0];
            });
            const studentSolutionArr = this.homework.solutions.filter(solution => solution.username === this.userName);
            studentSolutionArr.length !== 0 ? this.haveSolution = true : this.haveSolution = false;
            this.classService.getclassNumber(this.homework.classCode).subscribe(response => this.classNumber = response['number'])
          });
        }
      })
    }
  }

  //Approve solution by teacher
  approveSolution() {
    if (this.userRole === 'teacher') {
      //send save approve to this solution
      let solutionId = this.homework.solutions[0]._id
      this.homeworkService.approveSolution(solutionId).subscribe(response => console.log(response));
    }
  }

}
