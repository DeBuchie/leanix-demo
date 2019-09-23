import {Component, Input, OnInit} from '@angular/core';
import {RepositoryView} from '../repository-list/repository-list.entities';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss']
})
export class RepositoryComponent implements OnInit {

  @Input() public repository: RepositoryView | null = null;

  constructor() { }

  ngOnInit() {
  }

  public get repositoryDetailsLink(): string[] {
    const owner = this.repository.owner.login;
    const repositoryName = this.repository.name;
    return ['repository', owner, repositoryName];
  }

}
