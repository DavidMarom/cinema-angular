import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../models/Movie';


@Component({
   selector: 'app-strip',
   templateUrl: './strip.component.html'
})

export class StripComponent implements OnInit {
   @Input() movie: Movie;

   ngOnInit(): void {
   }
}