import { Component } from '@angular/core';

@Component({
  selector: 'ulfs-app',
  template: `<h1>Hello {{name}}</h1>My name is Ulf.`,
})
export class AppComponent  { name = "World"; }
