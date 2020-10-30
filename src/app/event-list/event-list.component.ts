import {Component, OnInit} from '@angular/core';
import {EventsService} from "../shared/events.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  eventXX: any;

  constructor(private _eventsService: EventsService,
              private _activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    let data = this._activatedRoute.snapshot.data['keyToTheResolver'];
    console.log(data);
    this.eventXX = data;
  }

  clicked($event) {
    console.log($event);
  }
}
