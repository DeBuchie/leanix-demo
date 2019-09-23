import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-issues-info',
  templateUrl: './issues-info.component.html',
  styleUrls: ['./issues-info.component.scss']
})
export class IssuesInfoComponent implements OnInit {

  @Input() issuesCount: number;

  constructor() { }

  ngOnInit() {
  }

}
