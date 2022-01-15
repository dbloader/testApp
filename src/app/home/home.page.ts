import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  articles: any[];

  constructor() {
    this.articles = [
      {
        title: 'title 1',
        description: 'this is a description'
      },
      {
        title: 'title 2',
        description: 'this is a description 2'
      }
    ]
  }

}
