import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OctoiconsComponent } from './octoicons/octoicons.component';



@NgModule({
  declarations: [OctoiconsComponent],
  exports: [
    OctoiconsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BasicModule { }
