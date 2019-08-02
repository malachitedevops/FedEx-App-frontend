import { TestBed } from '@angular/core/testing';

import { ProfilePictureService } from './profile-picture.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  MatDialogModule,
  MatIconModule
} from '@angular/material';

describe('ProfilePictureService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      MatIconModule,
      MatDialogModule
    ]
  }));

  it('should be created', () => {
    const service: ProfilePictureService = TestBed.get(ProfilePictureService);
    expect(service).toBeTruthy();
  });
});
