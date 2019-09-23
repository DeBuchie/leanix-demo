import {Component, Input, OnInit} from '@angular/core';
import {Octoicon} from '../../basic/octoicons/octoicons.entities';

@Component({
  selector: 'app-repository-info',
  templateUrl: './repository-info.component.html',
  styleUrls: ['./repository-info.component.scss']
})
export class RepositoryInfoComponent implements OnInit {

  @Input() octoicon: Octoicon;
  @Input() dataToDisplay: number | string;

  constructor() { }

  ngOnInit() {
  }

}
