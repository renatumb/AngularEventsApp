import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {EventsService} from "../shared/events.service";

@Injectable({
  providedIn: 'root'
})
export class EventRouterActivatorService implements CanActivate {

  constructor(private eventService: EventsService,
              private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const eventsExists = !!this.eventService.getEvent(+route.params['id']);

    if (!eventsExists) {
      this.router.navigate(['404']);
    }
    return eventsExists;
  }
}
