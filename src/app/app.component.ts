import {Component, OnInit} from '@angular/core';
import {Repository, RepositoryGQL, SearchGQL, SearchType} from '../generated/graphql';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'leanix-demo';

  constructor() {}

  ngOnInit(): void {

  }
}
