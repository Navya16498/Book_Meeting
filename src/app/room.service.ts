import { Injectable } from '@angular/core';
import { Room } from './meeting-interface';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  rooms: Room[] = [
    { id: 1, name: 'Room 1', status: 'Available' },
    { id: 2, name: 'Room 2', status: 'Available' },
    { id: 3, name: 'Room 3', status: 'Available' },
    { id: 4, name: 'Room 4', status: 'Available' },
    { id: 5, name: 'Room 5', status: 'Available' },
    { id: 6, name: 'Room 6', status: 'Available' },
    { id: 7, name: 'Room 7', status: 'Available' },
    { id: 8, name: 'Room 8', status: 'Available' },
    { id: 9, name: 'Room 9', status: 'Available' },
    { id: 10, name: 'Room 10', status: 'Available' },
  ];
  constructor() {}
  getRooms(): Room[] {
    return this.rooms;
  }
  getRoomStatus(id: number) {
    // this.rooms.find()
  }
}
