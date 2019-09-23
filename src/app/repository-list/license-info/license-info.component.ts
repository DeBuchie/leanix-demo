import {Component, Input, OnInit} from '@angular/core';
import {License} from '../../../generated/graphql';

@Component({
  selector: 'app-license-info',
  templateUrl: './license-info.component.html',
  styleUrls: ['./license-info.component.scss']
})
export class LicenseInfoComponent implements OnInit {

  @Input() license: License | null = null;

  constructor() { }

  ngOnInit() {
  }

}
