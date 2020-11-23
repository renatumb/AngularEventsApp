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

  @Input()
  sortBy: string;
  visibleSessions: ISession[];

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    console.log('SessionListComponent.ngOnChanges() ');
    if (this.sessions) {
      if (this.filterBy === 'all') {
        this.visibleSessions = this.sessions.slice(0);
      } else {
        this.visibleSessions = this.sessions.filter(element => element.level.toLowerCase() === this.filterBy.toLowerCase());
      }

      this.visibleSessions.sort((a, b) => {
        switch (this.sortBy) {
          case 'name':
            if (a.name.toLowerCase() === b.name.toLowerCase()) {
              return 0;
            }
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
              return 1;
            }
            if (a.name.toLowerCase() < b.name.toLowerCase()) {
              return -1;
            }
            break;
          case 'vote':
            return b.voters.length - a.voters.length;
          default :
            return 0;
        }
      });
    }
  }
}
