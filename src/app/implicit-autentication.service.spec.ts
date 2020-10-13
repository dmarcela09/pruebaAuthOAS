import { TestBed } from '@angular/core/testing';

import { ImplicitAutenticationService } from './implicit-autentication.service';

describe('ImplicitAutenticationService', () => {
  let service: ImplicitAutenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImplicitAutenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
