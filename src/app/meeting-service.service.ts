import { Injectable } from '@angular/core';
import { Meeting } from './meeting-interface';
@Injectable({
  providedIn: 'root',
})
export class MeetingServiceService {
  MeetingRoom: Meeting[] = [];
  idCounter = 0;

  constructor() {}

  //Book a new meeting:
  bookMeeting(
    name: string,
    room: string,
    date: number,
    startTime: number,
    endTime: number
  ) {
    const obj: Meeting = {
      id: this.idCounter++,
      Username: name,
      MeetingRoom: room,
      Date: date,
      startTime: startTime,
      endTime: endTime,
    };
    this.MeetingRoom.push(obj);
    return this.MeetingRoom;
  }

  //get all meeting for particular room
  getMeetingsById(id: number) {
    return this.MeetingRoom.filter((e) => e.id === id);
  }

  //delete meeting for a room by id
  deleteMeetingById(id: number) {
    return this.MeetingRoom.filter((e) => e.id !== id);
  }
}
