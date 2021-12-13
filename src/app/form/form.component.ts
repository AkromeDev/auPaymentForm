import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  nightMode = true;
  logo = "🌙";
  textColorClass = "text-gray-100";
  surfaceColorClass = "bg-gray-900";
  imageUrl="https://source.unsplash.com/1L71sPT5XKc";

  constructor() { }
  
  ngOnInit(): void {
  }
  
  changeMode() {
    if (this.nightMode === true) {
      this.nightMode = !this.nightMode;
      this.logo = "☀️";
      this.textColorClass = "text-gray-900";
      this.surfaceColorClass = "bg-white";
      this.imageUrl = "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";
      
    } else {
      this.nightMode = !this.nightMode;
      this.logo = "🌙";
      this.textColorClass = "text-gray-100";
      this.surfaceColorClass = "bg-gray-900";
      this.imageUrl = "https://source.unsplash.com/1L71sPT5XKc";
    }
  };
}
