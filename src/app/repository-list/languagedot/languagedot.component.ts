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

  public get languageColor(): string {
    if (this.language !== null && this.language.color) {
      return this.language.color;
    }
    return '#ccc';
  }

}
