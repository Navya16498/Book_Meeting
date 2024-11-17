import { Component } from '@angular/core';
import { MeetingServiceService } from '../meeting-service.service';
import { RoomService } from '../room.service';
import { Meeting, Room } from '../meeting-interface';

@Component({
  selector: 'app-meeting-list',
  templateUrl: './meeting-list.component.html',
  styleUrl: './meeting-list.component.css',
})
export class MeetingListComponent {
  meetings: Meeting[] = [];
  rooms:Room[] = [];
  constructor(private MeetingServiceService1: MeetingServiceService, 
    private RoomService1:RoomService
  ) {}
  ngOnInit() {
    this.getAllRooms();
  }
  deleteMeeting(meetingId: number): void {
    this.meetings = this.MeetingServiceService1.deleteMeetingById(meetingId);
    //this.meetings = this.MeetingServiceService1.getMeetingsByRoom(this.room); // Refresh the list
  }
  getAllRooms() {
    this.rooms = this.RoomService1.getRooms();
  }
}
