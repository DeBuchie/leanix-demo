import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepositoryListComponent } from './repository-list/repository-list.component';
import { LanguagedotComponent } from './languagedot/languagedot.component';



@NgModule({
  declarations: [RepositoryListComponent, LanguagedotComponent],
  imports: [
    CommonModule
  ],
  exports: [RepositoryListComponent]
})
export class RepositoryListModule { }
