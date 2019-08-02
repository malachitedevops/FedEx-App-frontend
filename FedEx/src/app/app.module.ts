import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ClassService } from './services/class.service';
import { ProfilePictureService } from './services/profile-picture.service';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ListHomeworksComponent } from './components/list-homeworks/list-homeworks.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HomeComponent } from './components/home/home.component';
import { HomeworkCreationComponent } from './components/homework-creation/homework-creation.component';
import { HeaderComponent } from './components/header/header.component';
import { PopupComponent } from './components/popup/popup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { HomeworkCreateService } from './services/homework-create.service';
import { SettingsComponent } from './components/settings/settings.component';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatSidenavModule,
  MatSelectModule,
  MatTabsModule,
  MatTableModule,
  MatToolbarModule,
  MatPaginatorModule,
  MatSnackBarModule,
  MatExpansionModule,
  MatBadgeModule,
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';
import { HomeworkService } from './services/homework.service';
import { ProfilePictureComponent } from './components/profile-picture/profile-picture.component';

@NgModule({
  declarations: [
    AppComponent,
    ListHomeworksComponent,
    SidenavComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    ErrorDialogComponent,
    HomeworkCreationComponent,
    PopupComponent,
    SettingsComponent,
    ProfilePictureComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatSidenavModule,
    MatSelectModule,
    MatTabsModule,
    MatTableModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatBadgeModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule
  ],
  providers: [
    ClassService,
    HomeworkService,
    HomeworkCreateService,
    ProfilePictureService
  ],
  bootstrap: [ AppComponent ],
  entryComponents: [ ErrorDialogComponent, PopupComponent ]

})
export class AppModule { }
