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
  // bookMeeting(
  //   name: string,
  //   room: string,
  //   date: number,
  //   startTime: number,
  //   endTime: number
  // ) {
  //   const obj: Meeting = {
  //     id: this.idCounter++,
  //     Username: name,
  //     MeetingRoom: room,
  //     Date: date,
  //     startTime: startTime,
  //     endTime: endTime,
  //   };
  //   this.MeetingRoom.push(obj);
  //   return this.MeetingRoom;
  // }

  //needed
  bookMeeting(obj: any) {
    const room_obj: Meeting = {
      id: this.idCounter++,
      Username: obj.name,
      MeetingRoom: obj.room,
      Date: obj.date,
      startTime: obj.startTime,
      endTime: obj.endTime,
    };
    this.MeetingRoom.push(room_obj);
    return this.MeetingRoom;
  }

  //get all meeting for particular room , check if it needed?
  getMeetingsById(id: number) {
    return this.MeetingRoom.filter((e) => e.id === id);
  }

  //delete meeting for a room by id, check if it needed?
  deleteMeetingById(id: number) {
    return this.MeetingRoom.filter((e) => e.id !== id);
  }
}
