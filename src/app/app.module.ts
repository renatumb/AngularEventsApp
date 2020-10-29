import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {EventListComponent} from './event-list/event-list.component';
import {EventThumbnailComponent} from './event-thumbnail/event-thumbnail.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {EventDetailsComponent} from './event-details/event-details.component';


@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
