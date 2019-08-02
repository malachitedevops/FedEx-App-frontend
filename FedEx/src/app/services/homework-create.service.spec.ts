import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HomeworkCreateService } from './homework-create.service';

describe('HomeworkCreateService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      RouterTestingModule,
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: HomeworkCreateService = TestBed.get(HomeworkCreateService);
    expect(service).toBeTruthy();
  });
});
