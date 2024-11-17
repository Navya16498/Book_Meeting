import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { MeetingListComponent } from './meeting-list/meeting-list.component';

@NgModule({
  declarations: [AppComponent, BookingFormComponent, MeetingListComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
