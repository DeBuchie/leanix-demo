import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Contributer} from './repository-details/repository-details.entities';

@Injectable()
export class RepositoryDetailsService {

  constructor(private httpClient: HttpClient) { }

  public getRepositoryDetails(owner: string, repositoryName: string): Observable<Contributer[]> {
    const url = `${environment.githubRESTAPI_URI}repos/${owner}/${repositoryName}/contributors`;
    return this.httpClient.get<Contributer[]>(url, {headers: {Authorization: `token ${environment.githubToken}`}});
  }
}
