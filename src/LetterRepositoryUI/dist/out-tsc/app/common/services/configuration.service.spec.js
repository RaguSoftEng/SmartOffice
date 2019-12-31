import { TestBed, inject } from '@angular/core/testing';
import { ConfigurationService } from './configuration.service';
describe('ConfigurationService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ConfigurationService]
        });
    });
    it('should be created', inject([ConfigurationService], (service) => {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=configuration.service.spec.js.map