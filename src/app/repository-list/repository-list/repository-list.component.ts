import { Component, OnInit } from '@angular/core';
import {Repository, SearchGQL, SearchType} from '../../../generated/graphql';
import {RepositoryView} from './repository-list.entities';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.scss']
})
export class RepositoryListComponent implements OnInit {

  private repositories: RepositoryView[] = [];

  constructor(private searchQuery: SearchGQL) { }

  ngOnInit() {
    this.searchQuery
      .watch({
        queryString: 'is:public',
        first: 50,
        type: SearchType.Repository
      })
      .valueChanges
      .subscribe(({data}) => {
        console.log(data);
        data.search.nodes.map((node: RepositoryView) => this.repositories.push(node));
      });
  }

}
