import { Component, ViewChild, ElementRef } from '@angular/core';
import { MeetingServiceService } from '../meeting-service.service';
import { RoomService } from '../room.service';
import { Meeting, Room } from '../meeting-interface';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrl: './booking-form.component.css',
})
export class BookingFormComponent {
  @ViewChild('ModalToggle') ModalToggle: ElementRef | undefined;
  Rooms: Room[] = [];
  selectedItemId: number = 0;
  selectedDetails: Meeting[] = [];
  selectedroomId!: number;
  constructor(
    private MeetingServiceService1: MeetingServiceService,
    private RoomService1: RoomService
  ) {}
  ngOnInit() {
    this.getRooms();
  }
  name!: string;
  room!: string;
  date!: number;
  startTime!: number;
  endTime!: number;
  Agenda!: string;
  selectedDetails1: Meeting[] = [];
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
    const modal = this.ModalToggle?.nativeElement;
    if (modal.style.display == 'block') {
      modal.style.display = 'none';
    }
  }

  getRooms() {
    this.Rooms = this.RoomService1.getRooms();
  }
  toggleModal() {
    const modal = this.ModalToggle?.nativeElement;
    if (modal.style.display === 'none' || modal.style.display === '') {
      modal.style.display = 'block';
    } else {
      modal.style.display = 'none';
    }
  }
  close() {
    const modal = this.ModalToggle?.nativeElement;
    if (modal.style.display == 'block') {
      modal.style.display = 'none';
    }
  }
  onRoomSelect(selectedItemId: number) {
    debugger;
    const selectedRoom = this.Rooms.find(
      (room) => room.id === Number(selectedItemId)
    );
    if (selectedRoom) {
      const roomName = selectedRoom.name;
      this.selectedroomId = selectedRoom.id;
      this.selectedDetails =
        this.MeetingServiceService1.getMeetingsById(roomName) ?? []; // Fetch meetings by room name
    }
  }
  onchangeRoom(id: any) {
    this.room = id;
  }
  deleteAmeeting(id: number) {
    this.selectedDetails1 = this.MeetingServiceService1.deleteMeetingById(id);
    this.onRoomSelect(this.selectedroomId);
  }
}
