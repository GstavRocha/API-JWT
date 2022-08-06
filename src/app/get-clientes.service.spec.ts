import { TestBed } from '@angular/core/testing';

import { GetClientesService } from './get-clientes.service';

describe('GetClientesService', () => {
  let service: GetClientesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetClientesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
