export class Visitor {
    Id = 0;
    Title = 1;
    FullName = '';
    NicNo = '';
    Address = '';
    ContactNo = '';
    Purpose = '';
    VisitDate = new Date();
    DepartmentId = 1;
    SeqId = 0;
    VisitorToken = 'AUTO GENERATED';
    IsWorkDone = false;
    Progress = this.IsWorkDone ? 'Finished' : 'Pending';
}
