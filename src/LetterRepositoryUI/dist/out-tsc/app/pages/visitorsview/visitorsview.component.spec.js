import { async, TestBed } from '@angular/core/testing';
import { VisitorsviewComponent } from './visitorsview.component';
describe('VisitorsviewComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [VisitorsviewComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(VisitorsviewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=visitorsview.component.spec.js.map