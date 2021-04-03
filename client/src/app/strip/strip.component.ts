import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-strip',
  templateUrl: './strip.component.html'
})
export class StripComponent implements OnInit {
  @Input() aaa: string;

  // myFunc(): void {
  //   console.log("hey");
  // }

  constructor() { }
  ngOnInit(): void {  }
}