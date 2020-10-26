import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {

  @Input()
  event: any;

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
