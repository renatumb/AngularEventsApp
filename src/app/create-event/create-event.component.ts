import {Component, OnInit} from '@angular/core';
import {EventsService} from "../shared/events.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  isDirty: boolean = true;
  newEvent: any;

  constructor(private eventService: EventsService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  saveEvent(form: any) {
    console.log('CreateEventComponent.saveEvent()');
    this.eventService.save(form.value);
    this.isDirty = false;
    this.router.navigate(['/events']);
  }

  cancel() {

  }
}
