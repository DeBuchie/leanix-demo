import {Component, OnInit} from '@angular/core';
import {RepositoryView} from './repository-list.entities';
import {SearchService} from './search.service';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.scss'],
  providers: [SearchService]
})
export class RepositoryListComponent implements OnInit {

  private repositories: RepositoryView[] = [];

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.searchService.getFirstFiftyPublicRepositories()
      .subscribe(({data}) => {
        console.log(data);
        data.search.nodes.map((node: RepositoryView) => this.repositories.push(node));
      });
  }

}
