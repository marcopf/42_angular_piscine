import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardComponent {
  val:any
  @Input () view_state;
  ngOnInit():void
  {
    let xhr = new XMLHttpRequest();
    let data1;
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
}
