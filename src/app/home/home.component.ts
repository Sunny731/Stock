import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public isTrue: boolean = false;
public isBlank: string = '';
  constructor() { }
  ngOnInit() {
  }
  public changeValue () {
    this.isTrue = !this.isTrue;
    this.isBlank = '我是有值的';
  }
}
export class Product {
  name: string;
  price: number;
  description: string;
  rating: number;
}
