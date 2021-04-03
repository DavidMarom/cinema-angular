import { Component, OnInit } from '@angular/core';
import { tmdbService } from '../../services/tmdbService.js'

@Component({
  selector: 'app-page01',
  templateUrl: './page01.component.html'
})

export class Page01Component implements OnInit {

  //   interface movie {
  //   id: number;
  //   name: string;
  // }

  arr: Array<object>;
  doneLoading: Boolean = false;

  constructor() {

    this.arr = [{ name: 'asdfsd', id: 1 }];

    tmdbService.getMovie('star')
      .then(res => {
        this.arr = res.results;
        this.doneLoading = true;
      });
  }

  ngOnChanges(): void {
    console.log(this.doneLoading);
  }

  ngOnInit(): void {
  }
}