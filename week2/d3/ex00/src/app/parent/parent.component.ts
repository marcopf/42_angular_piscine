import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  val = true;
  view = {
    type:"card",
    container: "container_card"
  };
  handleHide()
  {
    console.log("hey")
    if (this.val)
      this.val = false;
    else
      this.val = true;
  }
  changeView()
  {
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
