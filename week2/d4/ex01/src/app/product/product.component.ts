import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  view = {
    type:"card",
    container: "container_card"
  };
  table = false;
  val:any
  @Input () view_state:any;
  ngOnInit():void
  {
    let xhr = new XMLHttpRequest();
    let temp = this;
    xhr.open("GET", "https://fakestoreapi.com/products", true);
    xhr.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200)
      {
        temp.val = JSON.parse(this.responseText);
        console.log(temp.val)
      }
    }
    xhr.send();
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
  viewTable()
  {
    this.table = ! this.table;
  }
}
