import {Component, OnDestroy, OnInit} from '@angular/core';
import {RepositoryView} from './repository-list.entities';
import {SearchService} from './search.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.scss'],
  providers: [SearchService]
})
export class RepositoryListComponent implements OnInit, OnDestroy {

  private repositories: RepositoryView[] = [];
  private searchSubscription: Subscription | null = null;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.searchSubscription = this.searchService.getFirstFiftyPublicRepositories()
      .subscribe(({data}) => {
        data.search.nodes.map((node: RepositoryView) => this.repositories.push(node));
      });
  }

  ngOnDestroy(): void {
    if (this.searchSubscription !== null) {
      this.searchSubscription.unsubscribe();
    }
  }

}
