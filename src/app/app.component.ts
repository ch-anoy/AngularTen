import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-basic';
  name='anoy';

  getName()
  {
    return this.name
  }
  obj={
    name: 'anoy',
    age: 25
  }

  arr=['anoy','chowdhury','peter']
  siteUrl=window.location.href
}
