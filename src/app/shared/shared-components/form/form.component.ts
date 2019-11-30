import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '../../shared-states/MyErrorStateMatcher';
import { Person } from '../table/table.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output()
  newPersonOutput: EventEmitter<Person> = new EventEmitter<Person>();

  person: Person;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  nameFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(10),
  ]);

  matcher = new MyErrorStateMatcher();

  constructor() { }

  ngOnInit() {
    this.person = {name: 'Alan Albuquerque', email: 'alan@corno'};
  }

  addPerson() {
    this.newPersonOutput.emit(this.person);
  }


}
