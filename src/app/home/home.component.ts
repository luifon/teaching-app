import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  name: string;
  isHidden = true;
  isDisabled = false;

  items = ['Primeiro', 'Segundo', 'Terceiro', 'Quarto'];

  constructor() { }

  ngOnInit() {
  }

  addMore(item: string) {
    this.items.push(item);
  }

}
