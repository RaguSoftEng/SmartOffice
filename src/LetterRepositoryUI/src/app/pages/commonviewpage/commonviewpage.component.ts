import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-commonviewpage',
  templateUrl: './commonviewpage.component.html',
  styleUrls: ['./commonviewpage.component.css']
})
export class CommonviewpageComponent implements OnInit {
  formId = 0;
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute
      .params
      .subscribe(params => {
        this.formId = parseInt(params['formId'], 10);
      });
  }

  ngOnInit() {
  }

  loadPage() {
  }

  newPage() {
  }
}
