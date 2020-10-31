export class Visit {
    ObId = '';
    VisitorId = 0;
    Description = '';
    VisitDate = new Date();
    DepartmentId = 0;
    Purpose = 0;
    SeqId = 0;
    VisitorToken = 'AUTO GENERATED';
    IsWorkDone = false;
    Progress = this.IsWorkDone ? 'Finished' : 'Pending';
    Department = "";
}
