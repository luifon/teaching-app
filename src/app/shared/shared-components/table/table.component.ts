import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs';

export interface Person {
  email: string;
  name: string;
}

export const ELEMENT_DATA: Person[] = [
  { email: 'hydro@hydro', name: 'Hydrogen' },
  { email: 'helium@helium', name: 'Helium' },
  { email: 'lithium@lithium', name: 'Lithium' }
];


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnChanges {

  @Input() person: Observable<Person>;
  newPerson: Person;

  displayedColumns: string[] = ['email', 'name'];
  dataSource: MatTableDataSource<Person>;

  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Person>(ELEMENT_DATA);
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const person in changes) {
      if (this._hasNewPerson(changes, person)) {
        this._addNewPersonToTable(changes, person);
      }
    }
  }

  private _addNewPersonToTable(changes: SimpleChanges, person: string) {
    const newPerson: Person = changes[person].currentValue;
    ELEMENT_DATA.push(newPerson);
    this.dataSource = new MatTableDataSource<Person>(ELEMENT_DATA);
  }

  private _hasNewPerson(changes: SimpleChanges, person: string) {
    return changes[person].currentValue !== undefined;
  }
}
