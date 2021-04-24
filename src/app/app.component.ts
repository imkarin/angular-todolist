import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-todolist';
  name: string = 'someone';

  constructor() {
    this.changeName('Karin')
  }

  changeName(name:string):void {
    this.name = name;
  }
}
