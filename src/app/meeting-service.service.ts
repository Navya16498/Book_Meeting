import { Injectable } from '@angular/core';
import { Meeting, Room } from './meeting-interface';
@Injectable({
  providedIn: 'root',
})
export class MeetingServiceService {
  MeetingRoom: Meeting[] = [];

  constructor() {}
  ngOnInit() {
    debugger;
    const localstg = localStorage.getItem('MeetingData');
    if (localstg != null) {
      this.MeetingRoom = JSON.parse(localstg);
    }
  }
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
    debugger;
    const localstg = localStorage.getItem('MeetingData');
    let oldarr = [];

    // If there's existing meeting data, parse it into an array
    if (localstg !== null) {
      oldarr = JSON.parse(localstg);
    }

    // Create a new meeting object
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

    // Save the updated array back to localStorage
    localStorage.setItem('MeetingData', JSON.stringify(oldarr));

    // Optionally, update the MeetingRoom array in the component
    this.MeetingRoom = oldarr;

    // Log the updated array (for debugging)
    console.log(this.MeetingRoom);

    // Return the updated array of meetings
    return this.MeetingRoom;
  }

  //get all meeting for particular room
  getMeetingsById(room: string) {
    debugger;
    const localstg = localStorage.getItem('MeetingData');
    if (localstg !== null) {
      this.MeetingRoom = JSON.parse(localstg);
      return this.MeetingRoom.filter((e) => e.MeetingRoom === room);
    } else {
      return [];
    }
  }

  //delete meeting for a room by id, check if it needed?
  deleteMeetingById(id: number) {
    return this.MeetingRoom.filter((e) => e.id !== id);
  }
}
