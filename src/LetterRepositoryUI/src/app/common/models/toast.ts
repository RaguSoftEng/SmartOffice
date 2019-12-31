declare var $: any;
export class Toast {
  constructor() { }

  showNotification({ message, color, time, placement }: { message; color; time; placement?: any; }) {
    const type = ['', 'info', 'success', 'warning', 'danger'];
    $.notify({
      icon: 'notifications',
      message
    }, {
        type: type[color],
        timer: time,
        placement: (placement !== undefined) ? placement : {
          from: 'top',
          align: 'right'
        },
        // tslint:disable-next-line:max-line-length
        template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
          // tslint:disable-next-line:max-line-length
          '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
          '<i class="material-icons" data-notify="icon">notifications</i> ' +
          '<span data-notify="title">{1}</span> ' +
          '<span data-notify="message">{2}</span>' +
          '<div class="progress" data-notify="progressbar">' +
          // tslint:disable-next-line:max-line-length
          '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
          '</div>' +
          '<a href="{3}" target="{4}" data-notify="url"></a>' +
          '</div>'
      });
  }

  Success({ message, placement }: { message; placement?: any; }) {
    $.notify({
      icon: 'notifications',
      message
    }, {
        type: 'success',
        timer: 1000,
        placement: (placement !== undefined) ? placement : {
          from: 'top',
          align: 'right'
        },
        // tslint:disable-next-line:max-line-length
        template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
          // tslint:disable-next-line:max-line-length
          '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
          '<i class="material-icons" data-notify="icon">notifications</i> ' +
          '<span data-notify="title">{1}</span> ' +
          '<span data-notify="message">{2}</span>' +
          '<div class="progress" data-notify="progressbar">' +
          // tslint:disable-next-line:max-line-length
          '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
          '</div>' +
          '<a href="{3}" target="{4}" data-notify="url"></a>' +
          '</div>'
      });
  }

  Danger({ message, placement }: { message; placement?: any; }) {
    $.notify({
      icon: 'notifications',
      message
    }, {
        type: 'danger',
        timer: 4000,
        placement: (placement !== undefined) ? placement : {
          from: 'top',
          align: 'right'
        },
        // tslint:disable-next-line:max-line-length
        template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
          // tslint:disable-next-line:max-line-length
          '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
          '<i class="material-icons" data-notify="icon">notifications</i> ' +
          '<span data-notify="title">{1}</span> ' +
          '<span data-notify="message">{2}</span>' +
          '<div class="progress" data-notify="progressbar">' +
          // tslint:disable-next-line:max-line-length
          '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
          '</div>' +
          '<a href="{3}" target="{4}" data-notify="url"></a>' +
          '</div>'
      });
  }

  Warning({ message, placement }: { message; placement; }) {
    $.notify({
      icon: 'notifications',
      message
    }, {
        type: 'warning',
        timer: 4000,
        placement: (placement !== undefined) ? placement : {
          from: 'top',
          align: 'right'
        },
        // tslint:disable-next-line:max-line-length
        template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
          // tslint:disable-next-line:max-line-length
          '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
          '<i class="material-icons" data-notify="icon">notifications</i> ' +
          '<span data-notify="title">{1}</span> ' +
          '<span data-notify="message">{2}</span>' +
          '<div class="progress" data-notify="progressbar">' +
          // tslint:disable-next-line:max-line-length
          '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
          '</div>' +
          '<a href="{3}" target="{4}" data-notify="url"></a>' +
          '</div>'
      });
  }

  Info({ message, placement }: { message; placement?: any; }) {
    $.notify({
      icon: 'notifications',
      message
    }, {
        type: 'info',
        timer: 4000,
        placement: (placement !== undefined) ? placement : {
          from: 'top',
          align: 'right'
        },
        // tslint:disable-next-line:max-line-length
        template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
          // tslint:disable-next-line:max-line-length
          '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
          '<i class="material-icons" data-notify="icon">notifications</i> ' +
          '<span data-notify="title">{1}</span> ' +
          '<span data-notify="message">{2}</span>' +
          '<div class="progress" data-notify="progressbar">' +
          // tslint:disable-next-line:max-line-length
          '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
          '</div>' +
          '<a href="{3}" target="{4}" data-notify="url"></a>' +
          '</div>'
      });
  }
}
