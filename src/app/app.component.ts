import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'teaching-app';

  receivePerson(eventValue) {
    console.log(eventValue);
  }
}
