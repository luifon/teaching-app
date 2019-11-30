import { Component, OnInit } from '@angular/core';
import { ELEMENT_DATA, Person } from '../shared/shared-components/table/table.component';

@Component({
  selector: 'app-input-output-example',
  templateUrl: './input-output-example.component.html',
  styleUrls: ['./input-output-example.component.css']
})
export class InputOutputExampleComponent implements OnInit {

  person: Person;

  constructor() { }

  ngOnInit() {
  }

  receivePerson(event) {

    this.person = Object.assign({}, event);
  }

}
