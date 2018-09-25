import { TestBed } from '@angular/core/testing';

import { NgxJsonLdProvider } from './ngx-jsonld-provider.service';

describe('NgxJsonldProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxJsonLdProvider = TestBed.get(NgxJsonLdProvider);
    expect(service).toBeTruthy();
  });
});
