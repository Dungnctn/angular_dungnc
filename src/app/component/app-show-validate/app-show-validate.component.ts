import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-show-validate',
  templateUrl: './app-show-validate.component.html',
  styleUrls: ['./app-show-validate.component.css']
})
export class AppShowValidateComponent implements OnInit {
  @Input() field: any;
  @Input() key: string;
  constructor() {
    this.key = ''
  }

  ngOnInit(): void {
  }

}
