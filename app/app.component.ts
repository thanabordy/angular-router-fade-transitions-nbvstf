import { Component, HostBinding, ViewChild } from '@angular/core';
import { fadeAnimation } from './animations/fade.animation';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
  animations: [fadeAnimation]
})
export class AppComponent  {

  constructor() { }

  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

}
