import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name:string ;
  age:number ;
  email:string;
  address:Address;
  hobbies:string[];
  hello:any;


  constructor() {
 	console.log('constructor ran ..');

   }

  ngOnInit() {
  	console.log('ngOnInit ran..');

  	this.name = 'Jhon Dae';
  	this.age = 25;
  	this.address = {
  		street:'284 humboldt st',
  		city:'Brooklyn',
  		state:'New York'
  	}
  	this.hobbies = ['Write code' , 'watch movies', 'Listen to music'];
  	this.hello = 1 ;
  }

}

interface Address{
	street:string,
  	city: string,
  	state:string
}