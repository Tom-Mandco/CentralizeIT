import { Component } from '@angular/core';
import { NavbarComponent } from './Shared/index';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html'
})
export class AppComponent  { name = 'Angular'; }
