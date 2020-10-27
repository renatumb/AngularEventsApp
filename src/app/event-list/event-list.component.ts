import {Component, OnInit} from '@angular/core';
import {EventsService} from "../shared/events.service";

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  eventXX: any;

  constructor(private _eventsService: EventsService) {
  }

  ngOnInit(): void {
    this.eventXX = this._eventsService.getEvents();
  }

  clicked($event) {
    console.log($event);
  }
}
