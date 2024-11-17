export interface Meeting {
  id: number;
  Username: string;
  MeetingRoom: string;
  Agenda: string;
  Date: number;
  startTime: number;
  endTime: number;
}

export interface Room {
  id: number;
  name: string;
  status: 'Available' | 'In-Use' | 'Booked';
}
