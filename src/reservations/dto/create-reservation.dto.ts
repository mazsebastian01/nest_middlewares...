import { IsEmail, IsInt, IsNotEmpty, Min } from 'class-validator';

export class CreateReservationDto {
  @IsNotEmpty()
  customerName!: string;

  @IsEmail()
  email!: string;

  @IsInt()
  @Min(1)
  people!: number;
}
