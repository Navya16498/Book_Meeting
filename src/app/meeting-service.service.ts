import { Injectable } from '@angular/core';
import { Meeting } from './meeting-interface';
@Injectable({
  providedIn: 'root',
})
export class MeetingServiceService {
  MeetingRoom: Meeting[] = [];

  constructor() {}
  ngOnInit() {
    const localstg = localStorage.getItem('MeetingData');
    if (localstg != null) {
      this.MeetingRoom = JSON.parse(localstg);
    }
  }

  bookMeeting(obj: any) {
    const localstg = localStorage.getItem('MeetingData');
    let oldarr = [];

    // If there's existing meeting data, parsed it into an array
    if (localstg !== null) {
      oldarr = JSON.parse(localstg);
    }

    // Creating a new meeting object
    const room_obj: Meeting = {
      id: oldarr && oldarr.length ? oldarr.length + 1 : 1, // Increment the id based on existing meetings
      Username: obj.name,
      MeetingRoom: obj.room,
      Date: obj.date,
      Agenda: obj.Agenda,
      startTime: obj.startTime,
      endTime: obj.endTime,
    };

    // Add the new meeting object to the array
    oldarr.push(room_obj);

    // Saved the updated array back to localStorage
    localStorage.setItem('MeetingData', JSON.stringify(oldarr));

    // Optionally, update the MeetingRoom array in the component
    this.MeetingRoom = oldarr;

    // Return the updated array of meetings
    return this.MeetingRoom;
  }

  //get all meeting for particular room BY NAME
  getMeetingsById(room: string) {
    const localstg = localStorage.getItem('MeetingData');
    if (localstg !== null) {
      this.MeetingRoom = JSON.parse(localstg);
      return this.MeetingRoom.filter((e) => e.MeetingRoom === room);
    } else {
      return [];
    }
  }

  //delete meeting for a room by id
  deleteMeetingById(id: number) {
    const newarr = this.MeetingRoom.filter((e) => e.id !== id);
    localStorage.setItem('MeetingData', JSON.stringify(newarr));
    const localstg = localStorage.getItem('MeetingData') ?? '';
    return JSON.parse(localstg);
  }
}
