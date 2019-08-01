import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeworkCreationComponent } from './homework-creation/homework-creation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeworkCreateService } from './services/homework-create.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeworkCreationComponent
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
   MatDatepickerModule,
   MatNativeDateModule,
   HttpClientModule
  ],
  providers: [HomeworkCreateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
