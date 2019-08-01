import { TestBed } from '@angular/core/testing';

import { HomeworkCreateService } from './homework-create.service';

describe('HomeworkCreateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomeworkCreateService = TestBed.get(HomeworkCreateService);
    expect(service).toBeTruthy();
  });
});
