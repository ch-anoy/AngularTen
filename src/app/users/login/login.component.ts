import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  currentVal="";

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


}
