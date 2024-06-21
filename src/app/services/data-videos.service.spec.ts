import { TestBed } from '@angular/core/testing';

import { DataVideosService } from './data-videos.service';

describe('DataVideosService', () => {
  let service: DataVideosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataVideosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
