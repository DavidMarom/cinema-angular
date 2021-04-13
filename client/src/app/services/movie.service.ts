import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from '../models/Movie';


@Injectable({
   providedIn: 'root'
})
export class MovieService {

   BASE_URL: string = process.env.NODE_ENV === 'production' ? '/api/' : '//localhost:3030/api/'

   constructor(private http: HttpClient) { }

   getMovie(q: string): Observable<Movie[]> {
      return this.http.get<{
         total_pages: number,
         total_results: number,
         results: Movie[],
         page: number
      }>(`${this.BASE_URL}tmdb/${q}`)
         .pipe(
            map((result) => {
               console.log(result)
               return result.results
            })
         )
   }

}
