import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';

export interface Reservation {
  id: number;
  customerName: string;
  email: string;
  people: number;
}

@Injectable()
export class ReservationsService {
  private readonly reservations: Reservation[] = [];
  private nextId = 1;

  findAll(): Reservation[] {
    return this.reservations;
  }

  create(createReservationDto: CreateReservationDto): Reservation {
    const reservation: Reservation = {
      id: this.nextId++,
      ...createReservationDto,
    };

    this.reservations.push(reservation);

    return reservation;
  }
}
