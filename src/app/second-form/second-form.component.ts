import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-form',
  templateUrl: './second-form.component.html',
  styleUrls: ['./second-form.component.css']
})
export class SecondFormComponent implements OnInit {
  
  nightMode = true;
  logo = "🌙";
  textColorClass = "text-gray-100";
  surfaceColorClass = "bg-gray-900";
  imageUrl="url('../assets/16.jpg')";
  profilImageUrl="url('../assets/4.jpg')";
  srcUrl="../assets/4.jpg";
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  changeMode() {
    if (this.nightMode === true) {
      this.nightMode = !this.nightMode;
      this.logo = "☀️";
      this.textColorClass = "text-gray-900";
      this.surfaceColorClass = "bg-white";
      this.imageUrl = "url('../assets/19.jpg')";
      this.profilImageUrl="url('../assets/2jpg')";
      this.srcUrl="../assets/5.jpg";
      
    } else {
      this.nightMode = !this.nightMode;
      this.logo = "🌙";
      this.textColorClass = "text-gray-100";
      this.surfaceColorClass = "bg-gray-900";
      this.imageUrl = "url('../assets/16.jpg')";
      this.profilImageUrl="url('../assets/4.jpg')";
      this.srcUrl="../assets/4.jpg";
    }
  };
}
