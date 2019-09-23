import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RepositoryListComponent} from './repository-list/repository-list/repository-list.component';
import {RepositoryDetailsComponent} from './repository-details/repository-details/repository-details.component';


const routes: Routes = [
  {path: 'repository/:owner/:repo', component: RepositoryDetailsComponent},
  {path: '**', component: RepositoryListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
