import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RepositoryDetailsComponent} from './repository-details/repository-details.component';
import {ContributerComponent} from './contributer/contributer.component';
import {ContributerAvatarComponent} from './contributer-avatar/contributer-avatar.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {RouterTestingModule} from '@angular/router/testing';


@NgModule({
  declarations: [RepositoryDetailsComponent, ContributerComponent, ContributerAvatarComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterTestingModule
  ],
  exports: [RepositoryDetailsComponent]
})
export class RepositoryDetailsModule {
}
