import {Component, Input, OnInit} from '@angular/core';
import {Contributer} from '../repository-details/repository-details.entities';

@Component({
  selector: 'app-contributer',
  templateUrl: './contributer.component.html',
  styleUrls: ['./contributer.component.scss']
})
export class ContributerComponent implements OnInit {

  @Input() contributer: Contributer | null = null;
  constructor() { }

  ngOnInit() {
  }

}
