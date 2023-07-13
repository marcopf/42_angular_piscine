import { Component } from '@angular/core';

function myAlert($event:any, calc:any):any
{
  alert("error on input insert only positive integer");
  $event.target.value = "";
  calc.result = 0;
  return (0);
}
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})

export class CalculatorComponent {
  calc={
    left:0,
    operator:"+",
    right:0,
    result:0
  }
  public left(event:any)
  {
    this.calc.left = isNaN(Number(event.target.value)) || Number(event.target.value) < 0 ? myAlert(event, this.calc) : Number(event.target.value);
  }
  public right(event:any)
  {
    this.calc.right = isNaN(Number(event.target.value)) || Number(event.target.value) < 0 ? myAlert(event, this.calc) : Number(event.target.value);
  }
  public op(event:any)
  {
    this.calc.operator = event.target.value;
  }
  public doop()
  {
		if (this.calc.operator == "+")
		{
			this.calc.result = this.calc.left + this.calc.right;
			console.log(this.calc.left + this.calc.right);
		}
		if (this.calc.operator == "-")
		{
			this.calc.result = this.calc.left - this.calc.right;
			console.log(this.calc.left - this.calc.right);
		}
		if (this.calc.operator == "*")
		{
			this.calc.result = this.calc.left * this.calc.right;
			console.log(this.calc.left * this.calc.right);
		}
		if (this.calc.operator == "/")
		{
			if (this.calc.right == 0)
        alert("cannot divide by zero");
      else
      {
        this.calc.result = this.calc.left / this.calc.right;
			  console.log(this.calc.left / this.calc.right);
      }
    }	
  }
}
setInterval(function(){
  alert("please use me !");
}, 30000);