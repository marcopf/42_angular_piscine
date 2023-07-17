import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  @Input () form_obj:any;
  form(event:any)
  {
    this.form_obj = event;
  }
}
