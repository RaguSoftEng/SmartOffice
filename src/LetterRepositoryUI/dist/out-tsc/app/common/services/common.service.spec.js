import { TestBed, inject } from '@angular/core/testing';
import { CommonService } from './common.service';
describe('CommonService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [CommonService]
        });
    });
    it('should be created', inject([CommonService], (service) => {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=common.service.spec.js.map