import { Component } from '@angular/core';
import { MeetingServiceService } from '../meeting-service.service';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrl: './booking-form.component.css',
})
export class BookingFormComponent {
  constructor(private MeetingServiceService1: MeetingServiceService) {}
  name!: string;
  room!: string;
  date!: number;
  startTime!: number;
  endTime!: number;
  Agenda!: string;
  BookRoom() {
    debugger;
    if (
      this.name &&
      this.room &&
      this.date &&
      this.startTime &&
      this.endTime &&
      this.Agenda
    ) {
      const obj = {
        name: this.name,
        room: this.room,
        date: this.date,
        startTime: this.startTime,
        endTime: this.endTime,
        Agenda: this.Agenda,
      };
      this.MeetingServiceService1.bookMeeting(obj);
      this.name = '';
      this.room = '';
      this.date = 0;
      this.startTime = 0;
      this.endTime = 0;
      this.Agenda = '';
    }
  }
}
