import {Component, Input, OnInit} from '@angular/core';
import {RepositoryTopic} from '../../../generated/graphql';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {

  @Input() topic: RepositoryTopic | null = null;

  constructor() { }

  ngOnInit() {
  }

}
