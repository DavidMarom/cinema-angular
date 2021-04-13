import { Component, OnInit } from '@angular/core';
import { tmdbService } from '../../services/tmdbService.js'
import { Movie } from '../models/Movie.js';
import { MovieService } from '../services/movie.service.js';

@Component({
   selector: 'app-page01',
   templateUrl: './page01.component.html'
})

export class Page01Component implements OnInit {
   arr: Movie[];
   doneLoading: Boolean = false;

   constructor(private movieService: MovieService) {
      // tmdbService.getMovie('star')
      //    .then(res => {
      //       this.arr = res.results;
      //       this.doneLoading = true;
      //       // console.log(this.arr);
      //    });
   }

   ngOnChanges(): void {
      console.log(this.doneLoading);
   }

   ngOnInit(): void {
      this.movieService.getMovie('star')
         .subscribe((result) => {
            console.log(result)
            this.arr = result
            this.doneLoading = true;
         })
   }
}