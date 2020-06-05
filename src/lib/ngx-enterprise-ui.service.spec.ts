import { TestBed } from '@angular/core/testing';

import { NgxEnterpriseUIService } from './ngx-enterprise-ui.service';

describe('NgxEnterpriseUIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxEnterpriseUIService = TestBed.get(NgxEnterpriseUIService);
    expect(service).toBeTruthy();
  });
});
