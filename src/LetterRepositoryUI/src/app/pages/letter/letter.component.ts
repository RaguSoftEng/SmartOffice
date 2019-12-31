import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonService } from '../../common/services/common.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pair } from '../../common/models/pair';
import { Toast } from '../../common/models/toast';
import { NgxSpinnerService } from 'ngx-spinner';
import { Letter } from 'app/common/models/letter';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  updateClicked = false;
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.dirty && control.parent && control.parent.invalid && control.parent.dirty);
    return this.updateClicked && (invalidCtrl || invalidParent);
  }
}

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.css']
})
export class LetterComponent implements OnInit {
  letter: Letter;
  isNewLetter = false;
  toast: Toast;
  frmLetter: FormGroup;
  matcher = new MyErrorStateMatcher();
  letterContant: string = '';
  constructor(private serv: CommonService, private router: Router
    , private activatedRoute: ActivatedRoute, private spinner: NgxSpinnerService,
    private formBuilder: FormBuilder) {
    this.letter = new Letter();
    this.toast = new Toast();
    this.frmLetter = this.formBuilder.group(
      {
        Id: [0, Validators.compose([])],
        LetterCode: [{ value: 'AUTO GENERATED CODE', disabled: true }, Validators.compose([])],
        LetterRefNO: ['', Validators.compose([Validators.required, this.noWhitespaceValidator])],
        LetterCategory: [1, Validators.compose([])],
        DepartmentId: [1, Validators.compose([])],
        ReferenceLetter: ['', Validators.compose([])],
        FromAddress: ['', Validators.compose([Validators.required, this.noWhitespaceValidator])],
        ToAddress: ['', Validators.compose([Validators.required])],
        ToWhom: ['', Validators.compose([Validators.required])],
        SendOrReceive: [1, Validators.compose([])],
        PostType: [1, Validators.compose([])],
        Subject: ['', Validators.compose([])],
        SendOrReceiveDate: [new Date(), Validators.compose([])]
      }
    );
    this.activatedRoute
      .params
      .subscribe(params => {
        this.letter.Id = Number.isNaN(params.id) ? 0 : Number(params.id);
        if (this.letter.Id !== 0) {
          this.isNewLetter = false;
          this.loadLetter(this.letter.Id);
        } else {
          this.isNewLetter = true;
        }
      });
  }

  ngOnInit() {
  }

  noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { whitespace: true };
  }

  loadLetter(id: number): void {
    if (id !== undefined && id !== 0) {
      this.spinner.show();
      this.serv.httpGetData(1003, id)
        .subscribe((data) => {
          this.letter = data;
          this.letterContant = this.letter.LetterContant;
          this.spinner.hide();
        },
          (error) => {
            this.spinner.hide();
            this.toast.Danger({ message: error });
          });
    }
  }

  updateLetter(): void {
    this.matcher.updateClicked = true;
    if (!this.frmLetter.invalid) {
      this.spinner.show();
      this.letter.LetterContant = this.letterContant;
      this.serv.httpPost(this.letter, 1003, this.letter.Id)
        .subscribe((data) => {
          this.spinner.hide();
          this.toast.Success({ message: 'Successfully updated' });
          setTimeout(() => {
            // tslint:disable-next-line: no-string-literal
            this.router.navigateByUrl('/letter/1003/' + data['id']);
            this.router.routeReuseStrategy.shouldReuseRoute = () => {
              return false;
            };
          }, 0);
        },
          (error) => {
            this.spinner.hide();
            this.toast.Danger({ message: error });
          });
    }
  }

  newLetter(): void {
    this.router.navigateByUrl('/letter/1003/0');
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
  }

  back(): void {
    this.router.navigateByUrl('/letter/1003');
  }
}

