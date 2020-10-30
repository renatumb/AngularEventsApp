import {EventListComponent} from "./event-list/event-list.component";
import {EventDetailsComponent} from "./event-details/event-details.component";
import {Routes} from "@angular/router";
import {CreateEventComponent} from "./create-event/create-event.component";
import {Error404Component} from "./errors/404.component";
import {EventRouterActivatorService} from "./event-details/event-router-activator.service";
import {EventListResolverService} from "./event-list/event-list-resolver.service";

export const appRoutes: Routes = [
  {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateARoute']},
  {path: 'events', component: EventListComponent, resolve: {'keyToTheResolver': EventListResolverService}},
  {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouterActivatorService]},
  {path: '404', component: Error404Component},
  {path: '', redirectTo: '/events', pathMatch: 'full'}
];
