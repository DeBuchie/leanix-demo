import {Component, Input, OnInit} from '@angular/core';
import {Language} from '../../../generated/graphql';

@Component({
  selector: 'app-languagedot',
  templateUrl: './languagedot.component.html',
  styleUrls: ['./languagedot.component.scss']
})
export class LanguagedotComponent implements OnInit {

  @Input() language: Language | null = null;

  constructor() { }

  ngOnInit() {
  }

}
