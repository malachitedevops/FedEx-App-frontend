import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePictureComponent } from './profile-picture.component';
import {
  MatIconModule,
  MatDialogModule
} from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProfilePictureComponent', () => {
  let component: ProfilePictureComponent;
  let fixture: ComponentFixture<ProfilePictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatIconModule,
        MatDialogModule,
        HttpClientTestingModule
      ],
      declarations: [ ProfilePictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
