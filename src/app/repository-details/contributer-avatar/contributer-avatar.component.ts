import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-contributer-avatar',
  templateUrl: './contributer-avatar.component.html',
  styleUrls: ['./contributer-avatar.component.scss']
})
export class ContributerAvatarComponent implements OnInit {

  @Input() avatarURL = '';
  @Input() username = '';

  constructor() { }

  ngOnInit() {
  }

  public get backgroundImageProperty(): string {
    return `url(${this.avatarURL})`;
  }

  public get avatarAltText(): string {
    return `${this.username}-Avatar`;
  }

}
