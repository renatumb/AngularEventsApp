import {EventListComponent} from "./event-list/event-list.component";
import {EventDetailsComponent} from "./event-details/event-details.component";
import {Routes} from "@angular/router";
import {CreateEventComponent} from "./create-event/create-event.component";

export const appRoutes: Routes = [
  {path: 'events/new', component: CreateEventComponent},
  {path: 'events', component: EventListComponent},
  {path: 'events/:id', component: EventDetailsComponent},
  {path: '', redirectTo: '/events', pathMatch: 'full'}

];
