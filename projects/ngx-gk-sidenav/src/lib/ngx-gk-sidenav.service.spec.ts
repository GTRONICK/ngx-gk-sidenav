import { TestBed } from '@angular/core/testing';

import { NgxGkSidenavService } from './ngx-gk-sidenav.service';

describe('NgxGkSidenavService', () => {
  let service: NgxGkSidenavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxGkSidenavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
