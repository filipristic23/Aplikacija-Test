import { TestBed } from '@angular/core/testing';

import { RegisterGetService } from './register-get.service';

describe('RegisterGetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegisterGetService = TestBed.get(RegisterGetService);
    expect(service).toBeTruthy();
  });
});
