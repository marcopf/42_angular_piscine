import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  @Output () listSwitch_e = new EventEmitter();
  listSwitch()
  {
    this.listSwitch_e.emit();
  }
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
