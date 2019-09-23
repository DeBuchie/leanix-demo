import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RepositoryDetailsService} from '../repository-details.service';
import {Subscription} from 'rxjs';
import {Contributer} from './repository-details.entities';
import {Location} from '@angular/common';

@Component({
  selector: 'app-repository-details',
  templateUrl: './repository-details.component.html',
  styleUrls: ['./repository-details.component.scss'],
  providers: [RepositoryDetailsService]
})
export class RepositoryDetailsComponent implements OnInit, OnDestroy {

  private repositoryDetailsSubscription: Subscription | null = null;

  private contributers: Contributer[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private repositoryDetailsService: RepositoryDetailsService,
              private location: Location) { }

  ngOnInit() {
    const paramMap = this.activatedRoute.snapshot.paramMap;
    const owner = paramMap.get('owner');
    const repo = paramMap.get('repo');

    this.repositoryDetailsSubscription = this.repositoryDetailsService.getRepositoryDetails(owner, repo)
      .subscribe(value => {
        return this.contributers = value;
      });
  }

  ngOnDestroy(): void {
    if (this.repositoryDetailsSubscription !== null) {
      this.repositoryDetailsSubscription.unsubscribe();
    }
  }

  public goBack(): void {
    this.location.back();
  }

  public get contributerCount(): number {
    return this.contributers.length;
  }

}
