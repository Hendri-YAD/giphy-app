import { Component } from '@angular/core';
import {GiphyService, Giphy} from './giphy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  giphys: Giphy[] = [];

  constructor(private giphySvc: GiphyService) { }

  performSearch($event: string) {
    console.log('Search this: ', $event);
    this.giphySvc.search($event)
      .then((result: Giphy[]) => {
        console.log(result);
        this.giphys = result;
      })
      .catch(err => {
        console.error("ERROR: ", err);
      })
  }

}