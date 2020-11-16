import {Component, OnInit} from '@angular/core';
import {EventsService} from "../shared/events.service";
import {ActivatedRoute} from "@angular/router";
import {IEvent, ISession} from "../shared/ievent";


@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event: IEvent;
  addMode: boolean = false;

  constructor(private eventsService: EventsService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.event = this.eventsService.getEvent(+this.activatedRoute.snapshot.params['id']);
  }

  addSession() {
    console.log('EventDetailsComponent.addSession()');
    this.addMode = true;
  }

  saveNewSessionMethod($event: ISession) {
    console.log("EventDetailsComponent.saveNewSessionMethod()");
    this.addMode = false;
    this.event.sessions.push($event);
    this.eventsService.updateEvent(this.event);
  }
}
