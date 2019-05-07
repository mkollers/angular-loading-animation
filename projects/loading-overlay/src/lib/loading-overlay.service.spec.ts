import { TestBed } from '@angular/core/testing';

import { LoadingOverlayService } from './loading-overlay.service';

describe('LoadingOverlayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoadingOverlayService = TestBed.get(LoadingOverlayService);
    expect(service).toBeTruthy();
  });
});
