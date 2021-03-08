import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  img:string = "assets/1.jpg"
  curr = 1;
  constructor() { }

  ngOnInit(): void {
  }

  next(){
    this.curr++;
    if(this.curr > 3)this.curr = 1;
    this.img = `assets/${this.curr}.jpg`
  }

  prev(){
    this.curr--;
    if(this.curr < 1) this.curr = 3;
    this.img = `assets/${this.curr}.jpg`
  }
  

}
