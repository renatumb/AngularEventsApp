import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  eventXX = {
    name: 'Angular Connect',
    id: 1,
    date: '2020/02/01',
    time: '10:00am',
    price: 599.99,
    imageUrl: 'src/assets/images/angularconnect-shield.png',
    location: {
      address: '111 W Gerorgia St',
      city: 'Vancouver',
      country: 'Canada'
    }
  };

  constructor() {
  }

  ngOnInit()
    :
    void {
  }

}
