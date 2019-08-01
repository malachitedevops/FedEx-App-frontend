import { Component, OnInit } from '@angular/core';
import { Homework } from '../../models/homework';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-homework-full',
  templateUrl: './homework-full.component.html',
  styleUrls: ['./homework-full.component.sass']
})
export class HomeworkFullComponent implements OnInit {

  private homework: Homework;
  private isStudent = false;
  private isTeacher = false;
  private url: string;



  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    //Get homework from URL by id
    this.url = this.route.snapshot.queryParams.homeworkId;
    


    //Get login user role


  }

  //Submit new solution if user is student

  //Approve solution by teacher

}
