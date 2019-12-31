export class Visitor {
    constructor() {
        this.Id = 0;
        this.Title = 1;
        this.FullName = '';
        this.NicNo = '';
        this.Address = '';
        this.ContactNo = '';
        this.Purpose = '';
        this.VisitDate = new Date();
        this.DepartmentId = 1;
        this.SeqId = 0;
        this.VisitorToken = 'AUTO GENERATED';
        this.IsWorkDone = false;
        this.Progress = this.IsWorkDone ? 'Finished' : 'Pending';
    }
}
//# sourceMappingURL=visitor.js.map