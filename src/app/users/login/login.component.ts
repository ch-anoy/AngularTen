import { Component, OnInit, ViewChild } from '@angular/core';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  currentVal="";
  name="anoy"
  disabledBox=true;
  show=true;
  color="red";

  data=['anoy','ovi','ovinoy']
  fata=[
    {
      name:'anoy',
      age:'25',
      email:'ghorardim@email.com'
    },
    {
      name:'anoy1',
      age:'25',
      email:'ghorardim@email.com'
    },
    {
      name:'anoy2',
      age:'25',
      email:'ghorardim@email.com'
    },
    {
      name:'anoy3',
      age:'25',
      email:'ghorardim@email.com'
    },
    {
      name:'anoy4',
      age:'25',
      email:'ghorardim@email.com'
    }
  ]
  constructor() { }

  ngOnInit(): void {
    
  }
  getName(name: any){
    alert(name)
  }
  myEvent(evt: any){
    console.warn(evt)
  }

  getVal(val: any){
    
    console.log("sd",val)
  }
  enableBox(){
      this.disabledBox=false;
  }


}
