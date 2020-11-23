import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {ISession} from '../shared/ievent';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit, OnChanges {

  @Input()
  sessions: ISession[];
  @Input()
  filterBy: string;

  visibleSessions: ISession[];

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    console.log('SessionListComponent.ngOnChanges() ');

    console.log(this.filterBy);
    if (this.sessions) {
      if (this.filterBy === 'all') {
        this.visibleSessions = this.sessions.slice(0);
      } else {
        this.visibleSessions = this.sessions.filter(element => element.level.toLowerCase() === this.filterBy.toLowerCase());
      }
    }

    console.log(this.visibleSessions);
  }

}
