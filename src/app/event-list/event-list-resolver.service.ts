import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {EventsService} from "../shared/events.service";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class EventListResolverService implements Resolve<any> {

  constructor(private eventsService: EventsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    console.log(new Date() + ' resolve');
    return this.eventsService.getEvents().pipe(
      map(x => {

        console.log(new Date() + ' map');
        return x;
      })
    );
  }
}
