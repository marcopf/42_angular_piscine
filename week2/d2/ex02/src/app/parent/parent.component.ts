import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  
})
export class ParentComponent {
  @Input () temp:any;
  @Output () parentEvent= new EventEmitter();
  view={
    type:"card",
    container:"container_card"
  };
  public change()
  {
    console.log("padre emesso")
    if (this.view.type == "card")
    {
      this.view.container = "container_list"
      this.view.type = "list";
    }
    else
    {
      this.view.container = "container_card"
      this.view.type = "card";
    }
  }
}
