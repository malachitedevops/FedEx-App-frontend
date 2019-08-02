import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  public newSubject: string;

  constructor() { }

  ngOnInit() {
  }
  subjectChange(subj){
    this.newSubject = subj;
  }
}
