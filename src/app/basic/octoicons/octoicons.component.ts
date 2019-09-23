import {Component, Input, OnInit} from '@angular/core';
import {Octoicon} from './octoicons.entities';

@Component({
  selector: 'app-octoicons',
  templateUrl: './octoicons.component.html',
  styleUrls: ['./octoicons.component.scss']
})
export class OctoiconsComponent implements OnInit {

  private readonly ICON_PATH_PREFIX = '/assets/icons/octoicons/octoicons.svg#';

  @Input() octoicon: Octoicon;
  @Input() size = 15;

  constructor() { }

  ngOnInit() {
  }

  public get iconPath(): string {
    return `${this.ICON_PATH_PREFIX}${this.octoicon}`;
  }

  public get iconSize(): string {
    return `${this.size}px`;
  }


}
