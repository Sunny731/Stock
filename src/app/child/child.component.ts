import {Component, Input, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() public name: string = '';
  @Input() public sex: number;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges (changes: SimpleChanges): void {
    console.log(JSON.stringify(changes, null, 2));
  }
}
