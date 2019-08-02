import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ClassService } from './class.service';
import { MatDialogModule, MatSnackBarModule } from '@angular/material';

describe('ClassService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      RouterTestingModule,
      HttpClientTestingModule,
      MatDialogModule,
      MatSnackBarModule
    ]
  }));

  it('should be created', () => {
    const service: ClassService = TestBed.get(ClassService);
    expect(service).toBeTruthy();
  });
});
