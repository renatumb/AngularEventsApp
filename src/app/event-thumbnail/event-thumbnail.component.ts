import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IEvent} from "../shared/ievent";

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {

  @Input()
  event: IEvent;

  @Output()
  buttonClicked: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
  }

  handleClick($event: MouseEvent) {

    const moreData = {
      event: $event,
      extra: 'hello guys'
    };
    this.buttonClicked.emit(moreData);
  }
}
