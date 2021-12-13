import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  nightMode = true;
  logo = "🌙";
  textColor = "text-gray-900";
  surfaceColor = "bg-gray-900";

  constructor() { }
  
  ngOnInit(): void {
  }
  
  changeMode() {
    if (this.nightMode === true) {
      this.nightMode = !this.nightMode;
      this.logo = "☀️";
      this.textColor = "text-gray-100";
      this.surfaceColor = "bg-white";
    } else {
      this.nightMode = !this.nightMode;
      this.logo = "🌙";
      this.textColor = "text-gray-900";
      this.surfaceColor = "bg-gray-900";
    }
  };
}
