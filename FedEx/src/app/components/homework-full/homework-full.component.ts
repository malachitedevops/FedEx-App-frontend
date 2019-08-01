import { Component, OnInit, OnDestroy } from '@angular/core';
import { Homework } from '../../models/homework';
import { ActivatedRoute } from '@angular/router';
import { HomeworkService } from 'src/app/services/homework.service';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-homework-full',
  templateUrl: './homework-full.component.html',
  styleUrls: ['./homework-full.component.sass']
})
export class HomeworkFullComponent implements OnInit, OnDestroy {

  private homework: any;
  private isStudent = false;
  private isTeacher = false;
  private url: string;
  private homeWorkSubs: Subscription;
  private userRole: string;
  private userName: string;



  constructor(
    private route: ActivatedRoute,
    private homeworkService: HomeworkService,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    //Get homework from URL by id
    this.url = this.route.snapshot.queryParams.homeworkId;
    this.homeWorkSubs = this.homeworkService.getOneHomework(this.url).subscribe(response => {this.homework = response[0]; this.submitSolution(); this.approveSolution()})

    //Get login user role
    this.userRole = this.authenticationService.getUserRoleLocal();
    this.userName = this.authenticationService.getUsernameLocal();

  }

  ngOnDestroy() {
    this.homeWorkSubs.unsubscribe();
  }

  //Submit new solution if user is student
  submitSolution() {
    if (this.userRole === 'student') {
      const content = 'Hello'; //form['content']
      this.homeworkService.submitSolution(this.homework._id, this.userName, content).subscribe(response => {
        if (response['message'] === 'solution added') {
          //do something after solution added
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
