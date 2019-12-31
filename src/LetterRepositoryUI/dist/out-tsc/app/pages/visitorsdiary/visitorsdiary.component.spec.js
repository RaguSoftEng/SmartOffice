import { async, TestBed } from '@angular/core/testing';
import { VisitorsdiaryComponent } from './visitorsdiary.component';
describe('VisitorsdiaryComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [VisitorsdiaryComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(VisitorsdiaryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=visitorsdiary.component.spec.js.map