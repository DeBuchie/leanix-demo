import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-fork-info',
  templateUrl: './fork-info.component.html',
  styleUrls: ['./fork-info.component.scss']
})
export class ForkInfoComponent implements OnInit {

  @Input() forkCount = 0;

  constructor() { }

  ngOnInit() {
  }

}
