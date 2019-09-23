import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RepositoryListComponent} from './repository-list/repository-list.component';
import {LanguagedotComponent} from './languagedot/languagedot.component';
import {RepositoryComponent} from './repository/repository.component';
import {LicenseInfoComponent} from './license-info/license-info.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {BasicModule} from '../basic/basic.module';
import {ForkInfoComponent} from './fork-info/fork-info.component';
import {RepositoryInfoComponent} from './repository-info/repository-info.component';
import {StarredInfoComponent} from './starred-info/starred-info.component';
import {IssuesInfoComponent} from './issues-info/issues-info.component';
import {TopicComponent} from './topic/topic.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    RepositoryListComponent,
    LanguagedotComponent,
    RepositoryComponent,
    LicenseInfoComponent,
    ForkInfoComponent,
    RepositoryInfoComponent,
    StarredInfoComponent,
    IssuesInfoComponent,
    TopicComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    BasicModule,
    RouterModule
  ],
  exports: [RepositoryListComponent]
})
export class RepositoryListModule { }
