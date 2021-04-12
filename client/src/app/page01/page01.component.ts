import { Component, OnInit } from '@angular/core';
import { tmdbService } from '../../services/tmdbService.js'

@Component({
	selector: 'app-page01',
	templateUrl: './page01.component.html'
})

export class Page01Component implements OnInit {
	arr: Array<object>;
	doneLoading: Boolean = false;

	constructor() {
		tmdbService.getMovie('star')
			.then(res => {
				this.arr = res.results;
				this.doneLoading = true;
				console.log(this.arr);
			});
	}

	ngOnChanges(): void {
		console.log(this.doneLoading);
	}

	ngOnInit(): void {
	}
}