import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HeaderComponent } from '../header/header.component';
import { ListHomeworksComponent } from '../list-homeworks/list-homeworks.component';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  MatToolbarModule,
  MatInputModule,
  MatSelectModule,
  MatMenuModule,
  MatCardModule,
  MatDialogModule,
  MatSnackBarModule,
  MatIconModule
} from '@angular/material';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        HeaderComponent,
        ListHomeworksComponent,
        SidenavComponent
      ],
      imports: [
        MatToolbarModule,
        MatInputModule,
        MatSelectModule,
        MatMenuModule,
        MatCardModule,
        RouterTestingModule,
        HttpClientTestingModule,
        MatDialogModule,
        MatSnackBarModule,
        MatIconModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
