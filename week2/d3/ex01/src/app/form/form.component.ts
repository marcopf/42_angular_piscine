import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent{
  @Output () newProd = new EventEmitter<any>();
  form = {
    id:-1,
    title:"",
    price: "",
    image: "",
    category: "",
    description: "",
  }
  submitFunc(event:any)
  {
    if (this.form.title == "" || this.form.price == "" || this.form.image == "" || this.form.category == "" || this.form.description == "")
    {
      alert("missing info to prepare card...");
      return;
    }
    fetch('https://fakestoreapi.com/products',{
      method:"POST",
      body:JSON.stringify(this.form)
  })
      .then(res=>res.json())
      .then(json=>this.form.id = json.id)
      .then(e=>this.newProd.emit(JSON.parse(JSON.stringify(this.form))))
  }
}
