import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() form = {
    id:-1,
    title:"",
    price: "",
    image: "",
    category: "",
    description: "",
  };
}
