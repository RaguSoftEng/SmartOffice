import { TestBed, inject } from '@angular/core/testing';
import { AuthGuard } from './auth.guard.service';
describe('AuthGuard', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AuthGuard]
        });
    });
    it('should be created', inject([AuthGuard], (service) => {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=auth.guard.service.spec.js.map