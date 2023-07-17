import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  @Output () hide = new EventEmitter();
  @Output () change = new EventEmitter();
  view = true;
  public listIt()
  {
    this.view = !this.view;
    this.hide.emit();
  }
  changeView()
  {
    this.change.emit();
  }
}
