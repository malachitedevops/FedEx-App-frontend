import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HomeworkService } from './homework.service';

describe('HomeworkService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      RouterTestingModule
    ]
  }));

  it('should be created', () => {
    const service: HomeworkService = TestBed.get(HomeworkService);
    expect(service).toBeTruthy();
  });
});
