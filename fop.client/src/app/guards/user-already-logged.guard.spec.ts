import { TestBed, inject } from '@angular/core/testing';

import { UserAlreadyLoggedGuard } from './user-already-logged.guard';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserAlreadyLoggedGuard]
    });
  });

  it('should ...', inject([UserAlreadyLoggedGuard], (guard: UserAlreadyLoggedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
