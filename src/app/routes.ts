import {EventListComponent} from "./event-list/event-list.component";
import {EventDetailsComponent} from "./event-details/event-details.component";
import {Routes} from "@angular/router";

export const appRoutes: Routes = [
  {path: 'events', component: EventListComponent},
  {path: 'events/:id', component: EventDetailsComponent},
  {path: '', redirectTo: '/events', pathMatch: 'full'}

];
