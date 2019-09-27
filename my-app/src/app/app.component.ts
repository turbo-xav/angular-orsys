import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  time = Date.now();

  constructor() {
    setInterval( () => this.time = Date.now() , 0);
  }
}
