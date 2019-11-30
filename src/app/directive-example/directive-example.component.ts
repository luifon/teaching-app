import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-example',
  templateUrl: './directive-example.component.html',
  styleUrls: ['./directive-example.component.css']
})
export class DirectiveExampleComponent implements OnInit {

  value = '';
  counter = 0;
  decimal = '';
  counterDecimal = 0;

  isHidden = true;
  isHiddenCustom = true;

  constructor() { }

  ngOnInit() {
  }

  onChange() {
    this.counter = this.counter + 1;
  }

  onChangeDecimal() {
    this.counterDecimal = this.counterDecimal + 1;
  }

}
