import { TestBed } from '@angular/core/testing';

import { NgxJsonldService } from './ngx-jsonld.service';

describe('NgxJsonldService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxJsonldService = TestBed.get(NgxJsonldService);
    expect(service).toBeTruthy();
  });
});
