import { async, TestBed } from '@angular/core/testing';
import { CommonviewpageComponent } from './commonviewpage.component';
describe('CommonviewpageComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CommonviewpageComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(CommonviewpageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=commonviewpage.component.spec.js.map