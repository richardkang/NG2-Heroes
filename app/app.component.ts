import { Component, OnInit } from '@angular/core';


import {NgbDropdown, NgbDropdownToggle} from './dropdown';


@Component({
  moduleId: module.id,	
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styles:[`
    .area{
        width: 200px;
        height: 100px;
        display: inline-block;
    }
    h1{
        color:red;
    }
    img,.square{
        width: 200px;
        height: 150px;
    }
    .isSpecial{
        border:2px solid black;
    }
  `]
})

export class AppComponent  implements  OnInit{
    isOpen: boolean = false;

    private title:string = "Hello, Hero";
    private bgColor:string = "blue";
    private imgSrc:string ="https://udemy-images.udemy.com/course/750x422/500628_a962.jpg";
    


    dropdownMenu: Array<any> = [
    {text: 'Dynamic 1',},
    {text: 'Dynamic 2'}];
  
    toggleDropdown() {
        this.isOpen = !this.isOpen;
    }

    onClick(){
        alert("Hello, Hero");
    }

    getInputValue(ev){
        console.log(ev,ev.target,ev.target.value);
    }

    ngOnInit() {
  	  console.log("init");
  	}

}