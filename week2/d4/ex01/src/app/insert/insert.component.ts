import { Component, Output, EventEmitter } from '@angular/core';

function checkImage(img_url:string)
{
  var http = new XMLHttpRequest();
  http.open('HEAD', img_url, false);
  http.send();

  return (http.status != 404)
}

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent {
  form = {
    id:-1,
    title:"",
    price: "",
    image: "",
    category: "",
    description: "",
  }
  card = {
    id:-1,
    title:"",
    price: "",
    image: "",
    category: "",
    description: "",
  }
  form_active= false;
  submitFunc(event:any)
  {
    if (this.form.title == "" || !/^\d+$/.test(this.form.price) || this.form.price == "" || this.form.image == "" || !checkImage(this.form.image) || this.form.category == "" || this.form.description == "")
    {
      alert("missing pr invalid info to prepare card...");
      return;
    }
    fetch('https://fakestoreapi.com/products',{
      method:"POST",
      body:JSON.stringify(this.form)
  })
      .then(res=>res.json())
      .then(json=>this.form.id = json.id)
      .then(e=>this.card = JSON.parse(JSON.stringify(this.form)))
    this.form_active = true;
  }
}
