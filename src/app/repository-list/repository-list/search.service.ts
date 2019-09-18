import {Injectable} from '@angular/core';
import {SearchGQL, SearchQuery, SearchType} from '../../../generated/graphql';
import {Observable} from 'rxjs';
import {ApolloQueryResult} from 'apollo-client';

@Injectable()
export class SearchService {

  private readonly IS_PUBLIC_QUERY = 'is:public';
  private readonly FIRST_LIMIT = 50;
  private readonly SEARCH_TYPE = SearchType.Repository;

  constructor(private searchQuery: SearchGQL) { }


  public getFirstFiftyPublicRepositories(): Observable<ApolloQueryResult<SearchQuery>> {
    return this.searchQuery.watch({
      queryString: this.IS_PUBLIC_QUERY,
      first: this.FIRST_LIMIT,
      type: this.SEARCH_TYPE
    }).valueChanges;
  }
}
