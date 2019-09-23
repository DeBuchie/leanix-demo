import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-starred-info',
  templateUrl: './starred-info.component.html',
  styleUrls: ['./starred-info.component.scss']
})
export class StarredInfoComponent implements OnInit {

  @Input() starcount: number;

  constructor() { }

  ngOnInit() {
  }

}
