import { Component } from '@angular/core';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrl: './booking-form.component.css',
})
export class BookingFormComponent {
  name!: string;
  room!: string;
  date!: number;
  startTime!: number;
  endTime!: number;
  Agenda!: string;
  BookRoom() {}
}
