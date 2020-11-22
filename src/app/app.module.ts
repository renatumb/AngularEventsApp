import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {EventListComponent} from './event-list/event-list.component';
import {EventThumbnailComponent} from './event-thumbnail/event-thumbnail.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {EventDetailsComponent} from './event-details/event-details.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './routes';
import {CreateEventComponent} from './create-event/create-event.component';
import {Error404Component} from './errors/404.component';
import {UserModule} from './user/user.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CreateSessionComponent} from './create-session/create-session.component';
import {SessionListComponent} from './session-list/session-list.component';
import {CollapsibleWellComponent} from './shared/collapsible-well/collapsible-well.component';
import {DurationPipe} from './shared/duration.pipe';


@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    UserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: 'canDeactivateARoute', useValue: functionNameToDeactivate}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function functionNameToDeactivate(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('Date is not saved. Do you still want to leave?');
  }
  return true;
}
